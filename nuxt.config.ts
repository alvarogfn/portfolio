// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    [
      "@nuxtjs/i18n",
      {
        baseUrl: "https://alvarogfn.tech",
        defaultLocale: "pt",
        locales: [
          {
            code: "pt",
            dir: "ltr",
            file: "./i18n/locales/pt.json",
            iso: "pt-BR",
          },
          {
            code: "en",
            dir: "ltr",
            file: "./i18n/locales/en.json",
            iso: "en-US",
          },
        ],
        vueI18n: "./i18n",
      },
    ],
  ],
});
