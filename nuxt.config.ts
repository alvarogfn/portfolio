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
          href: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
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
