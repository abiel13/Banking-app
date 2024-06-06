import AuthForm from "@/components/AuthForm";
import Image from "next/image";
import React from "react";

const Signin = () => {
  return (
    <section className="flex justify-center overflow-x-hidden items-center px-4 py-4 w-screen h-screen">
      <AuthForm type="signin" />
      <div className="w-full h-full hidden md:block flex-1 relative">
        <Image src={"/demo.png"} className="object-contain aspect-[4/16]" alt="demo" fill />{" "}
      </div>
    </section>
  );
};

export default Signin;
