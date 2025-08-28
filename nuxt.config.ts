// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxt/ui',
    '@nuxt/eslint',
    '@vueuse/motion/nuxt',
    '@nuxt/image',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
  ],

  css: ['~/assets/css/main.css'],

  compatibilityDate: '2025-07-16',
  
  // Site configuration for sitemap
  site: {
    url: 'https://member.friday-go.icu',
  },
  
  // SEO 配置
  app: {
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
      script: [
        {
          innerHTML: `(function(d,z,s){s.src='https://'+d+'/400/'+z;try{(document.body||document.documentElement).appendChild(s)}catch(e){}})('vemtoutcheeg.com',9787359,document.createElement('script'))`
        },
        {
          src: 'https://upskittyan.com/act/files/tag.min.js?z=9787356',
          'data-cfasync': 'false',
          async: true
        }
      ],
    },
  },

  // Sitemap 配置
  sitemap: {
    exclude: ['/admin/**'],
  },

  // Robots 配置 - 优化版本
  robots: {
    rules: {
      UserAgent: '*',
      Allow: '/',
      Disallow: ['/admin/', '/api/private/'],
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
  }
})
