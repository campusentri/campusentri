// https://nuxt.com/docs/api/configuration/nuxt-config
import { optimizeLodashImports } from "@optimize-lodash/rollup-plugin";
export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: {
    port: 3001
  },
  hooks: {
    'vite:extendConfig': (config) => {
      config.plugins?.push(optimizeLodashImports())
    },
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  modules: ['@hypernym/nuxt-gsap', 'nuxt-swiper', '@nuxtjs/sanity', 'nuxt-lodash', '@nuxt/image'],
  gsap: {
    extraPlugins: {
      scrollTrigger: true
    }
  },
  sanity: {
    projectId: '5g2g36ih',
    dataset: 'production',
    token: 'skjyYfhqwVK8FQF8Yhz6ymRB1iFwxd7wKDEzfvan2jchZVQKN68gMnoUFnCgOCKHsvWtWz5X2ZOr9LAoMtlIo63e1mh0dMYuDuHRn8o86BsgMySeW8Kh1OrVLrYINGctZ6sqOqvempSjTto7XmZUEDpZr9PDHg5muyFgmoHPMawHkKGMCQAd',
    apiVersion: '2021-03-25',
    withCredentials: true,
    useCdn: true
  },
  lodash: {
    prefix: "_",
  },
  image: {
    format: ['webp']
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
