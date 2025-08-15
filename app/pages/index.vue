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
// 使用 ClientOnly 包装动态内容以避免 hydration mismatch
const config = useAppConfig();

// 动态 SEO - 使用 ClientOnly 避免 hydration 问题
useHead({
  title: 'PFinalClub - Front End Developer',
  meta: [
    {
      name: 'description',
      content: 'An awesome team in Shanghai. We build modern, performant, secure and scalable web apps and sites.'
    },
    {
      property: 'og:title',
      content: 'PFinalClub - Front End Developer'
    },
    {
      property: 'og:description',
      content: 'An awesome team in Shanghai. We build modern, performant, secure and scalable web apps and sites.'
    },
    {
      property: 'og:image',
      content: 'https://friday-go.icu/logo.png'
    }
  ],
  // 添加结构化数据
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'PFinalClub',
        jobTitle: '开发工程师',
        description: '来自上海的优秀团队。我们专注于构建现代化、高性能、安全且可扩展的 Web 应用和网站。',
        image: 'https://friday-go.icu/logo.png',
        url: 'https://friday-go.icu',
        email: 'lampxiezi@gmail.com',
        telephone: '+52 771 404 2659',
        sameAs: [
          'https://github.com/cesswhite/hato-minimal-template',
          'https://www.facebook.com/ecostudiodev'
        ],
        worksFor: {
          '@type': 'Organization',
          name: 'PFinalClub'
        }
      })
    }
  ]
})
</script>