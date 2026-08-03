import z from "zod";

export const profileSchema = z.object({
  name: z.string().trim().min(1, "نام را وارد کنید"),
  family: z.string().trim().min(1, "نام خانوادگی را وارد کنید"),
  mobile: z
    .string()
    .trim()
    .min(1, "شماره همراه را وارد کنید")
    .regex(/^09\d{9}$/, "شماره همراه نامعتبر است"),
  email: z
    .string()
    .trim()
    .min(1, "ایمیل را وارد کنید")
    .email("ایمیل نامعتبر است"),
});
