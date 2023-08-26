import en from "./locales/en.json";
import pt from "./locales/pt.json";

export default defineI18nConfig(function i18nConfig() {
  return {
    fallbackLocale: "pt",
    legacy: true,
    messages: {
      en,
      pt,
    },
  };
});
