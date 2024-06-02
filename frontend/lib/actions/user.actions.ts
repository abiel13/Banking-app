"use server";

import { ID } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../appwrite";
import { cookies } from "next/headers";
import { ParseStringified } from "../utils";

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
export async function signup(userdata: SignUpParams) {
  const { email, password, firstName, lastName } = userdata;
  try {
    const { account } = await createAdminClient();

    const newUser = await account.create(
      ID.unique(),
      email,
      password,
      `${firstName} ${lastName}`
    );

    const session = await account.createEmailPasswordSession(email, password);

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
