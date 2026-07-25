export const getAuthErrorMsg = (message) => {
  if (message.startsWith('Email address "')) {
    return "ایمیل وارد شده معتبر نیست یا در سیستم وجود ندارد.";
  }

  switch (message) {
    case "User already registered":
      return "این ایمیل قبلاً ثبت شده است";

    case "Invalid login credentials":
      return "ایمیل یا رمز عبور اشتباه است.";

    case "Email not confirmed":
      return "ایمیل شما هنوز تأیید نشده است.";

    case "Signup is disabled":
      return "ثبت‌نام در حال حاضر غیرفعال است.";

    case "Email rate limit exceeded":
      return "تعداد درخواست‌ها بیش از حد مجاز است. چند دقیقه دیگر دوباره تلاش کنید.";

    case "Password is too weak":
      return "رمز عبور انتخاب‌شده امنیت کافی ندارد.";

    case "Network request failed":
      return "ارتباط با سرور برقرار نشد.";

    case "Failed to fetch":
      return "ارتباط با اینترنت برقرار نیست.";

    case "Database error saving new user":
      return "خطایی هنگام ایجاد حساب کاربری رخ داد.";

    default:
      return "خطایی رخ داده است. لطفاً دوباره تلاش کنید.";
  }
};
