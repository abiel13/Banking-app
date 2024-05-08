import AuthForm from "@/components/AuthForm";
import React from "react";

const Signin = () => {
  return (
    <section className="flex justify-center overflow-x-hidden items-center px-4 py-4 w-screen h-screen">
      <AuthForm type="signin" />
    </section>
  );
};

export default Signin;
