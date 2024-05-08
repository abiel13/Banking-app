import React from "react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Control, FieldPath } from "react-hook-form";
import { Input } from "./ui/input";
import { z } from "zod";
import { authSchema } from "@/lib/utils";

const formSchema = authSchema("signup");

interface CustomInputI {
  control: Control<z.infer<typeof formSchema>>;
  name: FieldPath<z.infer<typeof formSchema>>;
  description: string;
  placeholder: string;
  type: "text" | "password";
  label?: string;
}

const CustomInput = ({
  control,
  name,
  description,
  placeholder,
  type = "text",
  label,
}: CustomInputI) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="w-full">
          <FormLabel className="capitalize text-white  text-base font-sans">
            {label || name}
          </FormLabel>
          <FormControl>
            <Input type={type} placeholder={placeholder} {...field} />
          </FormControl>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CustomInput;
