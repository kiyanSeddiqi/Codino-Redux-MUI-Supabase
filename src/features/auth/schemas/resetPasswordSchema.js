import z from "zod";
import { confirmPasswordField, passwordField } from "./loginSchema";

export const resetPasswordSchema = z
  .object({
    password: passwordField,
    confirmPassword: confirmPasswordField,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "تکرار کلمه عبور صحیح نیست",
    path: ["confirmPassword"],
  });
