// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: {
    port: 3001
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  modules: ['@hypernym/nuxt-gsap', 'nuxt-swiper', '@nuxtjs/sanity', 'nuxt-lodash'],
  gsap: {
    extraPlugins: {
      scrollTrigger: true
    }
  },
  sanity: {
    projectId: '5g2g36ih'
  },
  lodash: {
    prefix: "_",
  },
  alias: {
    assets: "/<rootDir>/assets",
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/_colors.scss" as *;',
        },
      },
    },
  },
  css: ["~/assets/scss/main.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
