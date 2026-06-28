import {
  roadmap_android,
  roadmap_back,
  roadmap_front,
  roadmap_mobile,
  roadmap_seo,
  roadmap_web,
} from "./imgSource";

export const roadMapData = [
  {
    id: 1,
    title: "مسیر یادگیری برنامه نویسی وب",
    imgSrc: roadmap_web,
    steps: [
      "آشنایی با مفاهیم پایه وب، HTML و CSS",
      "یادگیری اصول اولیه جاوااسکریپت",
      "ساخت اولین پروژه وب‌سایت شخصی",
    ],
    slug: "/roadmap/path-of-learning-web-development",
  },
  {
    id: 2,
    title: "مسیر یادگیری فرانت",
    imgSrc: roadmap_front,
    steps: [
      "تسلط بر HTML، CSS و جاوااسکریپت",
      "یادگیری فریم‌ورک‌های مدرن فرانت‌اند مثل React یا Vue",
      "پیاده‌سازی رابط کاربری پیشرفته با پروژه عملی",
    ],
    slug: "/roadmap/path-of-learning-programming-frontend",
  },
  {
    id: 3,
    title: "مسیر یادگیری بک اند",
    imgSrc: roadmap_back,
    steps: [
      "آشنایی با مفاهیم سرور و دیتابیس",
      "یادگیری یک زبان بک‌اند مثل Python (Django) یا Node.js",
      "ساخت API و اتصال به دیتابیس با پروژه عملی",
    ],
    slug: "/roadmap/path-of-learning-programming-backend",
  },
  {
    id: 4,
    title: "مسیر یادگیری برنامه نویسی موبایل",
    imgSrc: roadmap_mobile,
    steps: [
      "انتخاب پلتفرم مناسب (Android، iOS یا کراس پلتفرم مثل Flutter)",
      "یادگیری زبان و فریم‌ورک مخصوص موبایل (مثل Dart/Flutter یا Kotlin/Android)",
      "ساخت و انتشار اولین اپلیکیشن ساده موبایل",
    ],
    slug: "/roadmap/path-of-learning-programming-mobile",
  },
  {
    id: 5,
    title: "مسیر یادگیری سئو",
    imgSrc: roadmap_seo,
    steps: [
      "آشنایی با مفاهیم پایه سئو (On-page و Off-page، موتورهای جستجو، الگوریتم‌ها)",
      "آشنایی با مفاهیم پایه سئو (On-page و Off-page، موتورهای جستجو، الگوریتم‌ها)",
      "بهینه‌سازی صفحات وب و تولید محتوا بر اساس کلیدواژه‌ها با اجرای پروژه‌های عملی سئو",
    ],
    slug: "/roadmap/path-of-learning-seo",
  },
  {
    id: 6,
    title: "مسیر یادگیری برنامه‌نویسی اندروید",
    imgSrc: roadmap_android,
    steps: [
      "آشنایی با مفاهیم پایه برنامه‌نویسی موبایل و محیط اندروید استودیو",
      "یادگیری زبان برنامه‌نویسی Kotlin یا Java برای اندروید",
      "ساخت اپلیکیشن‌های اندرویدی با استفاده از کامپوننت‌های UI، دیتابیس محلی و انتشار اپ در گوگل‌پلی",
    ],
    slug: "/roadmap/path-of-learning-android-programming",
  },
];
