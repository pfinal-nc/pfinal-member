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
      title: 'PFinalClub - 全栈开发团队 | Vue.js React Node.js 后端开发专家',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'PFinalClub 是专业的全栈开发团队，专注于 Vue.js、React、Node.js、TypeScript 全栈开发。提供现代化 Web 应用开发、后端 API 开发、数据库设计、微服务架构、云原生开发等服务。擅长后端开发、系统架构设计、性能优化，为企业提供一站式技术解决方案。' 
        },
        { 
          name: 'keywords', 
          content: '全栈开发团队, Vue.js 开发专家, React 开发专家, Node.js 后端开发, TypeScript 全栈开发, 后端 API 开发, 数据库设计, 微服务架构, 云原生开发, 系统架构设计, 企业级应用开发, 电商网站开发, 管理系统开发, API 接口开发, 后端性能优化, 数据库优化, 服务器部署, 容器化部署, Docker 部署, Kubernetes 编排, 云服务部署, AWS 部署, 阿里云部署, 腾讯云部署, 负载均衡, 高可用架构, 分布式系统, 缓存设计, 消息队列, 搜索引擎优化, 监控告警, 日志管理, 安全防护, 数据备份, 灾难恢复, 自动化测试, CI/CD 流程, 代码质量保证, 测试驱动开发, 敏捷开发流程, DevOps 实践' 
        },
        { name: 'author', content: 'PFinalClub - 全栈开发团队' },
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
        { property: 'og:title', content: 'PFinalClub - 全栈开发团队 | Vue.js React Node.js 后端开发专家' },
        { property: 'og:description', content: 'PFinalClub 是专业的全栈开发团队，专注于 Vue.js、React、Node.js、TypeScript 全栈开发。提供现代化 Web 应用开发、后端 API 开发、数据库设计、微服务架构、云原生开发等服务。' },
        { property: 'og:image', content: 'https://friday-go.icu/logo.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'PFinalClub 全栈开发团队 Logo' },
        { property: 'og:url', content: 'https://member.friday-go.icu' },
        { property: 'og:site_name', content: 'PFinalClub - 全栈开发团队' },
        { property: 'og:locale', content: 'zh_CN' },
        { property: 'og:locale:alternate', content: 'en_US' },
        
        // Twitter Card - 增强版
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'PFinalClub - 全栈开发团队 | Vue.js React Node.js 后端开发专家' },
        { name: 'twitter:description', content: 'PFinalClub 是专业的全栈开发团队，专注于 Vue.js、React、Node.js、TypeScript 全栈开发。提供现代化 Web 应用开发、后端 API 开发、数据库设计、微服务架构、云原生开发等服务。' },
        { name: 'twitter:image', content: 'https://friday-go.icu/logo.png' },
        { name: 'twitter:image:alt', content: 'PFinalClub 全栈开发团队 Logo' },
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
        { name: 'application/ld+json', content: '{"@context":"https://schema.org","@type":"Organization","name":"PFinalClub","url":"https://member.friday-go.icu","logo":"https://friday-go.icu/logo.png","description":"专业全栈开发团队","address":{"@type":"PostalAddress","addressLocality":"China","addressRegion":"China","addressCountry":"CN"},"contactPoint":{"@type":"ContactPoint","telephone":"+52 771 404 2659","email":"lampxiezi@gmail.com","contactType":"customer service"},"sameAs":["https://github.com/pfinal-nc","https://www.facebook.com/ecostudiodev","https://friday-go.icu"]}' },
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
