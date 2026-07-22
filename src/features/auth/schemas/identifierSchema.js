import { z } from "zod";
import { emailField, mobileField } from "./loginSchema";

export const emailIdentifierSchema = z.object({
  email: emailField,
});

export const mobileIdentifierSchema = z.object({
  mobile: mobileField,
});
