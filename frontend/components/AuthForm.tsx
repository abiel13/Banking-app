"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { z } from "zod";
import { authSchema } from "@/lib/utils";
import CustomInput from "./CustomInput";

const AuthForm = ({ type }: { type: "signin" | "signup" }) => {
  const [user, setuser] = useState();

  const formSchema = authSchema(type);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <section className="w-full h-full flex items-center ">
      <div className="flex-1 w-full px-6">
        <header>
          <Link className="flex items-center gap-3" href={"/"}>
            <div className="relative w-[70px] h-[70px] ">
              <Image src={"/logo.png"} alt="logo " fill />
            </div>{" "}
            <span className="font-bold ">A-bank</span>
          </Link>
        </header>{" "}
        <div className="flex flex-col w-full ">
          {user ? (
            <h1 className="font-bold font-sans">Link Your Account</h1>
          ) : type === "signin" ? (
            <h1 className="font-bold font-sans">Login</h1>
          ) : (
            <h1 className="font-bold ">Register your Account</h1>
          )}
          {user ? (
            <p className="leading-loose">Link your account to get started</p>
          ) : (
            <p className="text-muted-foreground">please enter your details</p>
          )}
        </div>
        <div className="flex flex-col ">
          {user ? (
            <div className="">{/* Plaid link */}</div>
          ) : (
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-6 my-5 "
              >
                {type == "signup" && (
                  <>
                    <div className="flex items-center gap-3">
                      <CustomInput
                        name="firstname"
                        control={form.control}
                        placeholder="enter your firstname"
                        type="text"
                        description="input you firstname"
                      />{" "}
                      <CustomInput
                        name="lastname"
                        control={form.control}
                        placeholder="enter your lastname"
                        type="text"
                        description="input you lastname"
                      />{" "}
                    </div>
                    <CustomInput
                      name="address"
                      control={form.control}
                      placeholder="1 amari street"
                      type="text"
                      description="input youor address"
                    />{" "}
                    <div className="flex item-center gap-3 w-full">
                      <CustomInput
                        name="dateOfBirth"
                        label="Date Of Birth"
                        control={form.control}
                        placeholder="enter your dateOfBirth"
                        type="text"
                        description="input you dateOfBirth"
                      />{" "}
                      <CustomInput
                        name="ssn"
                        control={form.control}
                        label="SSN"
                        placeholder="enter your ssn(social security number) "
                        type="text"
                        description="input you ssn"
                      />{" "}
                    </div>
                  </>
                )}
                <CustomInput
                  name="email"
                  control={form.control}
                  placeholder="enter your email"
                  type="text"
                  description="input you email"
                />{" "}
                <CustomInput
                  name="password"
                  control={form.control}
                  placeholder="input your password"
                  type="text"
                  description="password must contain more than 8 chars"
                />
                <Button className="px-6 w-fit" type="submit">
                  Submit
                </Button>
              </form>
              dbestabi28@gmail.com
            </Form>
          )}
        </div>
        <div className="flex justify-center w-full">
          {type === "signin" ? (
            <Link className="text-primary font-inter" href={"/sign-up"}>
              Dont have an Account? Create an Account
            </Link>
          ) : (
            <Link className="text-primary font-inter" href={"/sign-in"}>
              Already have an account? Login
            </Link>
          )}
        </div>
      </div>
      <div className="flex-1 relative w-full h-full hidden md:block">
        {/* <Image src={"/logo.png"} alt="" fill /> */}
      </div>
    </section>
  );
};

export default AuthForm;
