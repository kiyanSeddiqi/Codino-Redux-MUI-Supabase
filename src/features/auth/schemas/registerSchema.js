import { z } from "zod";

export const registerSchema = z
  .object({
    email: z
      .string()
      .trim()
      .min(1, "ایمیل را وارد کنید")
      .email("ایمیل نامعتبر است"),
    mobile: z
      .string()
      .trim()
      .min(1, "شماره همراه را وارد کنید")
      .regex(/^09\d{9}$/, "شماره همراه نامعتبر است"),
    password: z
      .string()
      .trim()
      .min(1, "رمز عبور را وارد کنید")
      .min(6, "رمز عبور باید حداقل ۶ کاراکتر باشد"),
    confirmPassword: z.string().trim().min(1, "تکرار رمز عبور را وارد کنید"),
  })
  .refine(
    (data) => data.password === data.confirmPassword,

    {
      message: "رمزهای عبور یکسان نیستند",

      path: ["confirmPassword"],
    },
  );
