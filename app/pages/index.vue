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
              Featured Works
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
  title: 'PFinalClub - Full Stack Development Team | Vue.js React Node.js Backend Development Experts',
  meta: [
    {
      name: 'description',
      content: 'PFinalClub is a professional full-stack development team specializing in Vue.js, React, Node.js, and TypeScript full-stack development. We provide modern web application development, backend API development, database design, microservices architecture, and cloud-native development services. Expert in backend development, system architecture design, and performance optimization, offering one-stop technical solutions for enterprises.'
    },
    {
      name: 'keywords',
      content: 'PFinalClub, full stack development team, Vue.js development experts, React development experts, Node.js backend development, TypeScript full stack development, backend API development, database design, microservices architecture, cloud native development, system architecture design, enterprise application development, e-commerce website development, management system development, API interface development, backend performance optimization, database optimization, server deployment, containerized deployment, Docker deployment, Kubernetes orchestration, cloud service deployment, AWS deployment, Alibaba Cloud deployment, Tencent Cloud deployment, load balancing, high availability architecture, distributed systems, cache design, message queue, search engine optimization, monitoring alerts, log management, security protection, data backup, disaster recovery, automated testing, CI/CD pipeline, code quality assurance, test driven development, agile development process, DevOps practices'
    },
    {
      property: 'og:title',
      content: 'PFinalClub - Full Stack Development Team | Vue.js React Node.js Backend Development Experts'
    },
    {
      property: 'og:description',
      content: 'PFinalClub is a professional full-stack development team specializing in Vue.js, React, Node.js, and TypeScript full-stack development. We provide modern web application development, backend API development, database design, microservices architecture, and cloud-native development services.'
    },
    {
      property: 'og:image',
      content: 'https://friday-go.icu/logo.png'
    },
    {
      property: 'og:image:alt',
      content: 'PFinalClub Full Stack Development Team Logo'
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
        alternateName: 'Full Stack Development Team',
        description: 'PFinalClub is a professional full-stack development team specializing in Vue.js, React, Node.js, and TypeScript full-stack development. We provide modern web application development, backend API development, database design, microservices architecture, and cloud-native development services.',
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
          jobTitle: 'Full Stack Developer',
          description: 'Professional development team. We focus on building modern, high-performance, secure and scalable web applications and systems.'
        },
        serviceType: [
          'Full Stack Development',
          'Backend Development',
          'API Development',
          'Database Design',
          'Microservices Architecture',
          'Cloud Native Development',
          'System Architecture Design',
          'Enterprise Application Development',
          'E-commerce Website Development',
          'Management System Development',
          'Performance Optimization',
          'Server Deployment',
          'Containerized Deployment',
          'DevOps Practices'
        ],
        areaServed: {
          '@type': 'Country',
          name: 'China'
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Full Stack Development Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Vue.js Full Stack Development',
                description: 'Professional Vue.js full stack development services'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'React Full Stack Development',
                description: 'React-based full stack development services'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Node.js Backend Development',
                description: 'Node.js backend API development services'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'TypeScript Development',
                description: 'TypeScript type-safe development services'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Database Design',
                description: 'Professional database design and optimization services'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Microservices Architecture',
                description: 'Microservices architecture design and development services'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Cloud Native Development',
                description: 'Cloud native application development services'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'System Architecture Design',
                description: 'Enterprise system architecture design services'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'DevOps Practices',
                description: 'DevOps process and automated deployment services'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Performance Optimization',
                description: 'System performance optimization and tuning services'
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