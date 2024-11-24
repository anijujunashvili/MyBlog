import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import HomeKa from "./ka/home-page.json";
import HomeEn from "./en/home-page.json";

import HeaderKa from "./ka/header.json";
import HeaderEn from "./en/header.json";

import FooterKa from "./ka/footer.json";
import FooterEn from "./en/footer.json";

import LoginKa from "./ka/login.json";
import LoginEn from "./en/login.json";

import RegKa from "./ka/registration.json";
import RegEn from "./en/registration.json";

import AuthorKa from "./ka/author-page.json";
import AuthorEn from "./en/author-page.json";

import ProfileKa from "./ka/profile.json";
import ProfileEn from "./en/profile.json";

i18n.use(initReactI18next).init({
  resources: {
    ka: {
      translation: {
        "home-page": HomeKa,
        header: HeaderKa,
        footer: FooterKa,
        login: LoginKa,
        registration: RegKa,
        author: AuthorKa,
        profile: ProfileKa,
      },
    },
    en: {
      translation: {
        "home-page": HomeEn,
        header: HeaderEn,
        footer: FooterEn,
        login: LoginEn,
        registration: RegEn,
        author: AuthorEn,
        profile: ProfileEn,
      },
    },
  },
  lng: "en",
  fallbackLng: "ka",

  interpolation: {
    escapeValue: false,
  },
});
