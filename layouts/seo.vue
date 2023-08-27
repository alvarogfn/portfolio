<script lang="ts" setup>
  import image from "~/assets/images/image.png";

  const { t } = useI18n();

  const head = useLocaleHead({
    addDirAttribute: true,
    addSeoAttributes: true,
    identifierAttribute: "id",
  });

  const title = computed(() => t("page.title"));
  const description = computed(() => t("page.description"));
  const lang = computed<string>(() => head.value.htmlAttrs?.lang ?? "");
  const dir = computed<string>(() => head.value.htmlAttrs?.dir ?? "");
</script>

<template>
  <Html :lang="lang" :dir="dir">
    <Head>
      <Title>{{ title }}</Title>
      <template v-for="link in head.link" :key="link.id">
        <Link
          :id="link.id"
          :rel="link.rel"
          :href="link.href"
          :hreflang="link.hreflang"
        />
      </template>
      <template v-for="meta in head.meta" :key="meta.id">
        <Meta :id="meta.id" :property="meta.property" :content="meta.content" />
      </template>
      <Meta name="description" :content="description" />
      <Meta http-equiv="x-ua-compatible" content="IE=edge,chrome=1" />
      <Meta name="MobileOptimized" content="300" />
      <Meta name="HandheldFriendly" content="True" />
      <Meta name="theme-color" content="#1f1f1f" />
      <Meta name="msapplication-TileColor" content="#1f1f1f" />
      <Meta name="referrer" content="no-referrer-when-downgrade" />
      <Meta name="google" content="notranslate" />
      <Meta property="og:title" :content="title" />
      <Meta property="og:description" :content="description" />
      <Meta property="og:locale" :content="lang" />
      <Meta property="og:type" content="website" />
      <Meta property="og:site_name" :content="title" />
      <Meta property="og:image" :content="image" />
      <Meta property="og:image:secure_url" :content="image" />
      <Meta property="og:image:alt" content="Thumbnail" />
      <Meta property="og:image:type" content="image/png" />
      <Meta property="og:image:width" content="1200" />
      <Meta property="og:image:height" content="630" />
      <Meta name="author" content="Álvaro Guimarães" />
    </Head>

    <Body>
      <slot />
    </Body>
  </Html>
</template>
