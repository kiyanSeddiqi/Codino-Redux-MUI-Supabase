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
    path: "/join-us",
  },
  {
    desktopImgSrc: gem,
    mobileImgSrc: gem_mobile,
    path: "/codino-gem",
  },
  {
    desktopImgSrc: plus,
    mobileImgSrc: plus_mobile,
    path: "/subscription",
  },
  {
    desktopImgSrc: payment,
    mobileImgSrc: payment_mobile,
    path: "/courses",
  },
  {
    desktopImgSrc: frontend,
    mobileImgSrc: frontend_mobile,
    path: "/expert/front-end",
  },
  {
    desktopImgSrc: android,
    mobileImgSrc: android_mobile,
    path: "/expert/android-with-kotlin-and-java",
  },
];
