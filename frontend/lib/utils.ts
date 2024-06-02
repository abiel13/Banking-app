import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { z } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumberToUSD(number: number): string {
  // Create a NumberFormat object with options for USD format
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  // Format the number using the NumberFormat object
  var formattedNumber = formatter.format(number);

  return formattedNumber;
}

export const authSchema = (type: "signin" | "signup") =>
  z.object({
    firstName: type == "signin" ? z.string().optional() : z.string(),
    lastName: type == "signin" ? z.string().optional() : z.string(),
    address: type == "signin" ? z.string().optional() : z.string(),
    postalCode: type == "signin" ? z.string().optional() : z.string(),
    state: type == "signin" ? z.string().optional() : z.string(),
    dateOfBirth: type == "signin" ? z.string().optional() : z.string(),
    ssn: type == "signin" ? z.string().optional() : z.string(),

    //sign in
    email: z.string().email(),
    password: z.string().min(8),
  });

export const ParseStringified = (value: any) =>
  JSON.parse(JSON.stringify(value));




  export const encryptId = (value:any) => {
    return value;
  }