import z from "zod";

export const emailLoginSchema = z.object({
  email: z.string().trim().min(1, "ایمیل الزامی است").email("ایمیل معتبر نیست"),

  password: z.string().min(6, "رمز عبور باید حداقل ۶ کاراکتر باشد"),
});

export const mobileLoginSchema = z.object({
  mobile: z
    .string()
    .trim()
    .min(1, "شماره همراه الزامی است")
    .regex(/^09\d{9}$/, "شماره همراه معتبر نیست"),
});
