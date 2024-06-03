"use server";

import { ID } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../appwrite";
import { cookies } from "next/headers";
import {
  ParseStringified,
  encryptId,
  extractCustomerIdFromUrl,
} from "../utils";
import {
  CountryCode,
  ProcessorTokenCreateRequest,
  ProcessorTokenCreateRequestProcessorEnum,
  Products,
} from "plaid";
import { plaidClient } from "../plaid";
import { revalidatePath } from "next/cache";
import { addFundingSource, createDwollaCustomer } from "./dwolla.actions";

const {
  APPWRITE_DATABASE_ID: DATABASE_ID,
  APPWRITE_USER_COLLECTION_ID: USER_COLLECTION,
  APPWRITE_BANK_COLLECTION_ID: BANK_COLLECTION,
} = process.env;

export async function signin(userdata: any) {
  try {
    const { account } = await createAdminClient();
    const user = await account.createEmailPasswordSession(
      userdata.email,
      userdata.password
    );
    cookies().set("appwrite-session", user.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

    return ParseStringified(user);
  } catch (error) {
    console.log(error);
  }
}
export async function signup({ password, ...userdata }: SignUpParams) {
  const { email, firstName, lastName } = userdata;

  let newUserAccont;

  try {
    const { account, database } = await createAdminClient();

    newUserAccont = await account.create(
      ID.unique(),
      email,
      password,
      `${firstName} ${lastName}`
    );

    const session = await account.createEmailPasswordSession(email, password);

    if (!newUserAccont) throw new Error("Error creating User");

    const dwollaCustomerUrl = await createDwollaCustomer({
      ...userdata,
      type: "personal",
    });

    if (!dwollaCustomerUrl) throw new Error("Error creating Dwolla Customer");

    const dwollaCustomerId = extractCustomerIdFromUrl(dwollaCustomerUrl);

    const newUser = await database.createDocument(
      DATABASE_ID!,
      USER_COLLECTION!,
      ID.unique(),
      {
        ...userdata,
        userId: newUserAccont.$id,
        dwollaCustomerId,
        dwollaCustomerUrl,
      }
    );

    cookies().set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

    return ParseStringified(newUser);
  } catch (error) {
    console.log(error);
  }
}

// ... your initilization functions

export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();
    return await account.get();
  } catch (error) {
    return null;
  }
}

export async function logoutUser() {
  try {
    const { account } = await createSessionClient();

    cookies().delete("appwrite-session");

    await account.deleteSession("current");
  } catch (error) {
    return null;
  }
}

export async function createlLinkToken(user: User) {
  try {
    const tokenParams = {
      user: {
        client_user_id: user.$id,
      },
      client_name: `${user.firstName}  ${user.lastName}`,
      products: ["auth"] as Products[],
      language: "en",
      country_codes: ["US","NG","CA"] as CountryCode[],
    };

    const response = await plaidClient.linkTokenCreate(tokenParams);

    return ParseStringified({ linkToken: response.data.link_token });
  } catch (error) {
    console.log(error);
  }
}

export const createBankAccount = async ({
  userId,
  bankId,
  accountId,
  accessToken,
  fundingSourceUrl,
  shareableId,
}: createBankAccountProps) => {
  try {
    const { database } = await createAdminClient();

    const bankdb = await database.createDocument(
      DATABASE_ID!,
      BANK_COLLECTION!,
      ID.unique(),
      { userId, bankId, accountId, accessToken, fundingSourceUrl, shareableId }
    );
  } catch (error) {
    console.log(error);
  }
};

export async function exchangePublicToken({
  publicToken,
  user,
}: exchangePublicTokenProps) {
  try {
    const response = await plaidClient.itemPublicTokenExchange({
      public_token: publicToken,
    });

    const accessToken = response.data.access_token;
    const itemId = response.data.item_id;

    const accountResponse = await plaidClient.accountsGet({
      access_token: accessToken,
    });

    const accountData = accountResponse.data.accounts[0];

    const request: ProcessorTokenCreateRequest = {
      access_token: accessToken,
      account_id: accountData.account_id,
      processor: "dwolla" as ProcessorTokenCreateRequestProcessorEnum,
    };

    const processorTokenResponse = await plaidClient.processorTokenCreate(
      request
    );
    const processorToken = processorTokenResponse.data.processor_token;

    const fundingSourceUrl = await addFundingSource({
      dwollaCustomerId: user.dwollaCustomerId!,
      processorToken,
      bankName: accountData.name,
    });

    if (!fundingSourceUrl) throw Error;

    await createBankAccount({
      userId: user.$id,
      bankId: itemId,
      accountId: accountData.account_id,
      accessToken,
      fundingSourceUrl,
      shareableId: encryptId(accountData.account_id),
    });

    revalidatePath("/");
  } catch (error) {
    console.error(error);
  }
}
