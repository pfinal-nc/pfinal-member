<template>
  <div class="min-h-screen bg-gradient-to-br from-zinc-50 via-white to-zinc-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-800">
    <!-- 背景装饰 -->
    <div class="fixed inset-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-40 -right-40 w-80 h-80 bg-emerald-200 dark:bg-emerald-800/20 rounded-full blur-3xl opacity-30"></div>
      <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 dark:bg-blue-800/20 rounded-full blur-3xl opacity-30"></div>
    </div>

    <div class="relative z-20">
      <LazySwitchMode />
      <UContainer class="py-8 md:py-16">
        <div v-motion-fade class="flex flex-col gap-8 items-center justify-center max-w-6xl mx-auto">
          <!-- 头像区域 -->
          <div v-motion-slide-visible-bottom class="relative">
            <div class="absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
            <LazyPhotoProfile />
          </div>
          
          <!-- 个人信息区域 -->
          <div v-motion-slide-visible-bottom class="text-center space-y-4">
            <LazyMyInfo />
          </div>
          
          <!-- 社交媒体区域 -->
          <div v-motion-slide-visible-bottom class="py-4">
            <LazySocialNetwork />
          </div>
          
          <!-- 作品展示区域 -->
          <div v-motion-slide-visible-bottom class="w-full max-w-7xl">
            <h3 class="text-xl font-semibold text-zinc-800 dark:text-zinc-200 mb-6 text-center">
              精选作品
            </h3>
            <LazyGallery />
          </div>
        </div>
      </UContainer>
    </div>
    
    <Footer />
  </div>
</template>

<script setup>
// 动态 SEO - 使用静态数据避免 hydration 问题
if (process.client) {
  useHead({
  title: 'PFinalClub - 全栈开发团队 | Vue.js React Node.js 后端开发专家',
  meta: [
    {
      name: 'description',
      content: 'PFinalClub 是专业的全栈开发团队，专注于 Vue.js、React、Node.js、TypeScript 全栈开发。提供现代化 Web 应用开发、后端 API 开发、数据库设计、微服务架构、云原生开发等服务。擅长后端开发、系统架构设计、性能优化，为企业提供一站式技术解决方案。'
    },
    {
      name: 'keywords',
      content: '全栈开发团队, Vue.js 开发专家, React 开发专家, Node.js 后端开发, TypeScript 全栈开发, 后端 API 开发, 数据库设计, 微服务架构, 云原生开发, 系统架构设计, 企业级应用开发, 电商网站开发, 管理系统开发, API 接口开发, 后端性能优化, 数据库优化, 服务器部署, 容器化部署, Docker 部署, Kubernetes 编排, 云服务部署, AWS 部署, 阿里云部署, 腾讯云部署, 负载均衡, 高可用架构, 分布式系统, 缓存设计, 消息队列, 搜索引擎优化, 监控告警, 日志管理, 安全防护, 数据备份, 灾难恢复, 自动化测试, CI/CD 流程, 代码质量保证, 测试驱动开发, 敏捷开发流程, DevOps 实践'
    },
    {
      property: 'og:title',
      content: 'PFinalClub - 全栈开发团队 | Vue.js React Node.js 后端开发专家'
    },
    {
      property: 'og:description',
      content: 'PFinalClub 是专业的全栈开发团队，专注于 Vue.js、React、Node.js、TypeScript 全栈开发。提供现代化 Web 应用开发、后端 API 开发、数据库设计、微服务架构、云原生开发等服务。'
    },
    {
      property: 'og:image',
      content: 'https://friday-go.icu/logo.png'
    },
    {
      property: 'og:image:alt',
      content: 'PFinalClub 全栈开发团队 Logo'
    }
  ],
  // 添加结构化数据
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'PFinalClub',
        alternateName: '全栈开发团队',
        description: 'PFinalClub 是专业的全栈开发团队，专注于 Vue.js、React、Node.js、TypeScript 全栈开发。提供现代化 Web 应用开发、后端 API 开发、数据库设计、微服务架构、云原生开发等服务。',
        url: 'https://member.friday-go.icu',
        logo: 'https://friday-go.icu/logo.png',
        image: 'https://friday-go.icu/logo.png',
        email: 'lampxiezi@gmail.com',
        telephone: '+52 771 404 2659',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'China',
          addressRegion: 'China',
          addressCountry: 'CN',
          postalCode: '100000'
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+52 771 404 2659',
          email: 'lampxiezi@gmail.com',
          contactType: 'customer service',
          availableLanguage: ['Chinese', 'English']
        },
        sameAs: [
          'https://github.com/pfinal-nc',
          'https://www.facebook.com/ecostudiodev',
          'https://friday-go.icu'
        ],
        founder: {
          '@type': 'Person',
          name: 'PFinalClub',
          jobTitle: '开发工程师',
          description: '来自上海的优秀团队。我们专注于构建现代化、高性能、安全且可扩展的 Web 应用和网站。'
        },
        serviceType: [
          '全栈开发',
          '后端开发',
          'API 开发',
          '数据库设计',
          '微服务架构',
          '云原生开发',
          '系统架构设计',
          '企业级应用开发',
          '电商网站开发',
          '管理系统开发',
          '性能优化',
          '服务器部署',
          '容器化部署',
          'DevOps 实践'
        ],
        areaServed: {
          '@type': 'Country',
          name: 'China'
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: '全栈开发服务',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Vue.js 全栈开发',
                description: '专业的 Vue.js 全栈开发服务'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'React 全栈开发',
                description: '基于 React 的全栈开发服务'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Node.js 后端开发',
                description: 'Node.js 后端 API 开发服务'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'TypeScript 开发',
                description: 'TypeScript 类型安全的开发服务'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: '数据库设计',
                description: '专业的数据库设计和优化服务'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: '微服务架构',
                description: '微服务架构设计和开发服务'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: '云原生开发',
                description: '云原生应用开发服务'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: '系统架构设计',
                description: '企业级系统架构设计服务'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'DevOps 实践',
                description: 'DevOps 流程和自动化部署服务'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: '性能优化',
                description: '系统性能优化和调优服务'
              }
            }
          ]
        }
      })
    }
  ]
  })
}
</script>