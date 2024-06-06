import AuthForm from "@/components/AuthForm";
import Image from "next/image";

import React from "react";

const Signup = async () => {
  return (
    <section className="flex justify-center items-center px-4 py-4   overflow-x-hidden  min-h-screen">
      <AuthForm type="signup" />
      <div className="w-full h-full hidden md:block flex-1 relative">
        <Image src={"/demo.png"} className="object-contain aspect-[4/16]" alt="demo" fill />{" "}
      </div>
    </section>
  );
};

export default Signup;
