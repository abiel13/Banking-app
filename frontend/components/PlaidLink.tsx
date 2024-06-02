"use client";
import React, { useCallback, useEffect, useState } from "react";
import { Button } from "./ui/button";
import {
  PlaidLinkOnSuccess,
  PlaidLinkOptions,
  usePlaidLink,
} from "react-plaid-link";
import { useRouter } from "next/navigation";
import { createlLinkToken } from "@/lib/actions/user.actions";

const PlaidLink = ({ user, variant }: PlaidLinkProps) => {
  const [token, setToken] = useState("");
  const router = useRouter();

  useEffect(() => {
    const getLinkToken = async () => {
        const response = await createlLinkToken(user);


        setToken(response.linkToken)

    };
  }, []);

  const onSuccess = useCallback<PlaidLinkOnSuccess>(
    async (public_token: String) => {
      // await ExchangePublicToken({
      //     publicToken:public_token,
      //     user
      // })

      router.push("/");
    },
    [user]
  );

  const config: PlaidLinkOptions = {
    token,
    onSuccess,
  };

  const { open, ready } = usePlaidLink(config);

  return (
    <div className="">
      {variant === "primary" ? (
        <Button onClick={() => open()} disabled={!ready} className="">
          Connect Bank
        </Button>
      ) : variant === "ghost" ? (
        <Button>Connect Bank</Button>
      ) : (
        <Button>Connect Bank</Button>
      )}
    </div>
  );
};

export default PlaidLink;
