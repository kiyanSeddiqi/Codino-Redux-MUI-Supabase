import { z } from "zod";

export const emailField = z
  .string()
  .trim()
  .min(1, "ایمیل الزامی است")
  .email("ایمیل معتبر نیست");

export const passwordField = z
  .string()
  .trim()
  .min(1, "رمز عبور الزامی است")
  .min(6, "رمز عبور باید حداقل ۶ کاراکتر باشد");

export const confirmPasswordField = z
  .string()
  .trim()
  .min(1, "تکرار کلمه عبور الزامی است");

export const mobileField = z
  .string()
  .trim()
  .min(1, "شماره همراه الزامی است")
  .regex(/^09\d{9}$/, "شماره همراه معتبر نیست");

export const emailLoginSchema = z.object({
  email: emailField,
  password: passwordField,
});

export const mobileLoginSchema = z.object({
  mobile: mobileField,
});
