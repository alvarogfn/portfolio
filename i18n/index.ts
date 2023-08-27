import en from "./locales/en.json";
import pt from "./locales/pt.json";

export default defineI18nConfig(() => ({
  datetimeFormats: {
    en: {
      default: {},
    },
    pt: {
      default: {
        month: "long",
        year: "numeric",
      },
    },
  },
  fallbackLocale: "pt",
  legacy: true,
  messages: {
    en,
    pt,
  },
}));
