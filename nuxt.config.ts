// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxt/ui',
    '@nuxt/eslint',
    '@vueuse/motion/nuxt',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
  ],

  css: ['~/assets/css/main.css'],

  compatibilityDate: '2025-07-16',
  
  // 静态站点生成配置 - 完全禁用 SSR 和预渲染
  ssr: false,
  
  // 静态部署配置 - 修复 GitHub Pages 部署问题
  nitro: {
    prerender: {
      routes: ['/']
    }
  },

  // 添加 base 路径配置 - 解决自定义域名部署问题
  app: {
    baseURL: '/',
    buildAssetsDir: '/_nuxt/',
    head: {
      title: 'PFinalClub - Front End Developer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'An awesome team in Shanghai. We build modern, performant, secure and scalable web apps and sites.' 
        },
        { name: 'keywords', content: 'frontend developer, web development, Vue.js, Nuxt.js, Shanghai' },
        { name: 'author', content: 'PFinalClub' },
        { name: 'robots', content: 'index, follow' },
        
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'PFinalClub - Front End Developer' },
        { property: 'og:description', content: 'An awesome team in Shanghai. We build modern, performant, secure and scalable web apps and sites.' },
        { property: 'og:image', content: 'https://friday-go.icu/logo.png' },
        { property: 'og:url', content: 'https://member.friday-go.icu' },
        { property: 'og:site_name', content: 'PFinalClub' },
        
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'PFinalClub - Front End Developer' },
        { name: 'twitter:description', content: 'An awesome team in Shanghai. We build modern, performant, secure and scalable web apps and sites.' },
        { name: 'twitter:image', content: 'https://friday-go.icu/logo.png' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://member.friday-go.icu' },
      ],
    },
  },

  // Sitemap 配置
  sitemap: {
    siteUrl: 'https://member.friday-go.icu',
    exclude: ['/admin/**'],
  },

  // Robots 配置 - 优化版本
  robots: {
    rules: {
      UserAgent: '*',
      Allow: '/',
      Disallow: ['/admin/', '/api/private/'],
      Sitemap: 'https://member.friday-go.icu/sitemap.xml',
    },
  },

  // 添加路由规则
  routeRules:{
    '/sw.js':{
      static: true,
      headers: {
        'Service-Worker-Allowed': '/'
      }
    }
  },

  // 添加 Vite 配置以优化构建
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'nuxt-ui': ['@nuxt/ui'],
            'vueuse': ['@vueuse/motion']
          }
        }
      }
    }
  }
})
