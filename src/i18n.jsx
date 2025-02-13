import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en.json";
import tr from "./locales/tr.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // Passes i18n down to React components
  .init({
    resources: {
      en: { translation: en },
      tr: { translation: tr },
    },
    fallbackLng: "en", // Fallback if language is not available
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
    detection: {
        order: ["navigator", "localStorage", "cookie"],
        caches: ["localStorage"]
    },
  });

export default i18n;