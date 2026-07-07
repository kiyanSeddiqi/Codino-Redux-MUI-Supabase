import dayjs from "dayjs";
import jalaliday from "jalaliday";
import "dayjs/locale/fa";

dayjs.extend(jalaliday);

export const formatJalaliDate = (date) => {
  return dayjs(date).calendar("jalali").locale("fa").format("dddd D MMMM YYYY");
};
