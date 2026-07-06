import dayjs from "dayjs";
import jalaliday from "jalaliday";

dayjs.extend(jalaliday);

const weekDays = [
  "یکشنبه",
  "دوشنبه",
  "سه‌شنبه",
  "چهارشنبه",
  "پنجشنبه",
  "جمعه",
  "شنبه",
];

export const formatJalaliDate = (date) => {
  // اگر فعلاً تاریخ به صورت شمسی داخل Mock Data باشد
  if (/^\d{4}\/\d{2}\/\d{2}$/.test(date)) {
    const [year, month, day] = date.split("/").map(Number);

    const months = [
      "",
      "فروردین",
      "اردیبهشت",
      "خرداد",
      "تیر",
      "مرداد",
      "شهریور",
      "مهر",
      "آبان",
      "آذر",
      "دی",
      "بهمن",
      "اسفند",
    ];

    // محاسبه روز هفته
    const weekDay = dayjs
      .calendar("jalali")
      .year(year)
      .month(month - 1)
      .date(day)
      .day();

    return `${weekDays[weekDay]} ${day} ${months[month]} ${year}`;
  }

  // بعداً وقتی Supabase تاریخ میلادی برگرداند
  return dayjs(date).calendar("jalali").locale("fa").format("dddd D MMMM YYYY");
};
