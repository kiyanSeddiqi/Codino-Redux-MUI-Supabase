import {
  payment,
  payment_mobile,
  gem,
  gem_mobile,
  // plus,
  // plus_mobile,
  teachers,
  teachers_mobile,
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
  // {
  //   desktopImgSrc: plus,
  //   mobileImgSrc: plus_mobile,
  //   path: "/subscription",
  // },
  {
    desktopImgSrc: payment,
    mobileImgSrc: payment_mobile,
    path: "/courses",
  },
  // {
  //   desktopImgSrc: b_5,
  //   mobileImgSrc: null,
  //   path: "/expert/front-end",
  // },
  // {
  //   desktopImgSrc: b_6,
  //   mobileImgSrc: null,
  //   path: "/expert/android-with-kotlin-and-java",
  // },
];
