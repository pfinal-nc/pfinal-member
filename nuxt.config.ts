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
  
  // SEO 配置 - 优化版本
  app: {
    head: {
      title: 'PFinalClub - Full Stack Development Team | Vue.js React Node.js Backend Development Experts',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'PFinalClub is a professional full-stack development team specializing in Vue.js, React, Node.js, and TypeScript full-stack development. We provide modern web application development, backend API development, database design, microservices architecture, and cloud-native development services. Expert in backend development, system architecture design, and performance optimization, offering one-stop technical solutions for enterprises.' 
        },
        { 
          name: 'keywords', 
          content: 'PFinalClub, full stack development team, Vue.js development experts, React development experts, Node.js backend development, TypeScript full stack development, backend API development, database design, microservices architecture, cloud native development, system architecture design, enterprise application development, e-commerce website development, management system development, API interface development, backend performance optimization, database optimization, server deployment, containerized deployment, Docker deployment, Kubernetes orchestration, cloud service deployment, AWS deployment, Alibaba Cloud deployment, Tencent Cloud deployment, load balancing, high availability architecture, distributed systems, cache design, message queue, search engine optimization, monitoring alerts, log management, security protection, data backup, disaster recovery, automated testing, CI/CD pipeline, code quality assurance, test driven development, agile development process, DevOps practices' 
        },
        { name: 'author', content: 'PFinalClub - Full Stack Development Team' },
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        { name: 'googlebot', content: 'index, follow' },
        { name: 'baiduspider', content: 'index, follow' },
        { name: '360Spider', content: 'index, follow' },
        { name: 'sogou spider', content: 'index, follow' },
        
        // 地理位置和业务信息
        { name: 'geo.region', content: 'CN' },
        { name: 'geo.placename', content: 'China' },
        { name: 'geo.position', content: '35.8617;104.1954' },
        { name: 'ICBM', content: '35.8617, 104.1954' },
        
        // 业务相关
        { name: 'business:contact_data:street_address', content: 'China' },
        { name: 'business:contact_data:locality', content: 'China' },
        { name: 'business:contact_data:region', content: 'China' },
        { name: 'business:contact_data:postal_code', content: '100000' },
        { name: 'business:contact_data:country_name', content: 'China' },
        { name: 'business:contact_data:phone_number', content: '+52 771 404 2659' },
        { name: 'business:contact_data:email', content: 'lampxiezi@gmail.com' },
        
        // Open Graph - 增强版
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'PFinalClub - Full Stack Development Team | Vue.js React Node.js Backend Development Experts' },
        { property: 'og:description', content: 'PFinalClub is a professional full-stack development team specializing in Vue.js, React, Node.js, and TypeScript full-stack development. We provide modern web application development, backend API development, database design, microservices architecture, and cloud-native development services.' },
        { property: 'og:image', content: 'https://friday-go.icu/logo.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'PFinalClub Full Stack Development Team Logo' },
        { property: 'og:url', content: 'https://member.friday-go.icu' },
        { property: 'og:site_name', content: 'PFinalClub - Full Stack Development Team' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:locale:alternate', content: 'zh_CN' },
        
        // Twitter Card - 增强版
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'PFinalClub - Full Stack Development Team | Vue.js React Node.js Backend Development Experts' },
        { name: 'twitter:description', content: 'PFinalClub is a professional full-stack development team specializing in Vue.js, React, Node.js, and TypeScript full-stack development. We provide modern web application development, backend API development, database design, microservices architecture, and cloud-native development services.' },
        { name: 'twitter:image', content: 'https://friday-go.icu/logo.png' },
        { name: 'twitter:image:alt', content: 'PFinalClub Full Stack Development Team Logo' },
        { name: 'twitter:site', content: '@PFinalClub' },
        { name: 'twitter:creator', content: '@PFinalClub' },
        
        // 其他搜索引擎优化
        { name: 'msapplication-TileColor', content: '#10b981' },
        { name: 'theme-color', content: '#10b981' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
        { name: 'apple-mobile-web-app-title', content: 'PFinalClub' },
        { name: 'application-name', content: 'PFinalClub' },
        { name: 'format-detection', content: 'telephone=no' },
        
        // 结构化数据相关
        { name: 'application/ld+json', content: '{"@context":"https://schema.org","@type":"Organization","name":"PFinalClub","url":"https://member.friday-go.icu","logo":"https://friday-go.icu/logo.png","description":"Professional Full Stack Development Team","address":{"@type":"PostalAddress","addressLocality":"China","addressRegion":"China","addressCountry":"CN"},"contactPoint":{"@type":"ContactPoint","telephone":"+52 771 404 2659","email":"lampxiezi@gmail.com","contactType":"customer service"},"sameAs":["https://github.com/pfinal-nc","https://www.facebook.com/ecostudiodev","https://friday-go.icu"]}' },
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
