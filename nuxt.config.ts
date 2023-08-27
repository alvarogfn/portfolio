// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { href: "https://fonts.googleapis.com", rel: "preconnect" },
        {
          crossorigin: "",
          href: "https://fonts.gstatic.com",
          rel: "preconnect",
        },
        {
          href: "https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap",
          rel: "stylesheet",
        },
      ],
    },
  },
  css: ["~/assets/main.scss"],
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
            name: "Português",
          },
          {
            code: "en",
            dir: "ltr",
            file: "./i18n/locales/en.json",
            iso: "en-US",
            name: "English",
          },
        ],
        vueI18n: "./i18n",
      },
    ],
  ],
});
