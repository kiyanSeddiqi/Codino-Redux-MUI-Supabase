import z from "zod";

const nameRegex = /^[\p{L}\s]+$/u;

export const profileSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "نام را وارد کنید")
    .regex(nameRegex, "نام فقط می‌تواند شامل حروف باشد"),
  family: z
    .string()
    .trim()
    .min(1, "نام خانوادگی را وارد کنید")
    .regex(nameRegex, "نام خانوادگی فقط می‌تواند شامل حروف باشد"),
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

export const profileResetPassword = z
  .object({
    currPassword: z.string().trim().min(1, "رمز عبور فعلی را وارد کنید"),
    newPassword: z
      .string()
      .trim()
      .min(1, "رمز عبور الزامی است")
      .min(6, "رمز عبور باید حداقل ۶ کاراکتر باشد"),
    confirmPassword: z.string().trim().min(1, "تکرار رمز عبور الزامی است"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "تکرار رمز عبور صحیح نیست",
    path: ["confirmPassword"],
  })
  .refine((data) => data.currentPassword !== data.newPassword, {
    message: "رمز عبور جدید نباید با رمز عبور فعلی یکسان باشد",
    path: ["newPassword"],
  });
