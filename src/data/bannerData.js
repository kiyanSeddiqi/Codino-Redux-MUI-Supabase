import {
  payment,
  payment_mobile,
  gem,
  gem_mobile,
  plus,
  plus_mobile,
  teachers,
  teachers_mobile,
  frontend,
  frontend_mobile,
  android,
  android_mobile,
} from "./imgSource";

export const bannerData = [
  {
    desktopImgSrc: teachers,
    mobileImgSrc: teachers_mobile,
    mobileText: "به جمع مدرسین کدینو بپیوندید",
    path: "/",
  },
  {
    desktopImgSrc: gem,
    mobileImgSrc: gem_mobile,
    path: "/",
  },
  {
    desktopImgSrc: plus,
    mobileImgSrc: plus_mobile,
    path: "/courses?plus=true",
  },
  {
    desktopImgSrc: payment,
    mobileImgSrc: payment_mobile,
    path: "/courses?installment=true",
  },
  {
    desktopImgSrc: frontend,
    mobileImgSrc: frontend_mobile,
    path: "course/frontend",
  },
  {
    desktopImgSrc: android,
    mobileImgSrc: android_mobile,
    path: "/course/android-with-kotlin-and-java",
  },
];
