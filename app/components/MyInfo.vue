<template>
  <div class="flex flex-col items-center justify-center space-y-6">
    <div class="text-center space-y-3">
      <h1 class="font-sans font-bold text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-zinc-900 via-emerald-600 to-blue-600 dark:from-zinc-50 dark:via-emerald-400 dark:to-blue-400 bg-clip-text text-transparent">
        {{ name }}
      </h1>
      <h2 class="font-sans font-medium text-xl md:text-2xl text-zinc-700 dark:text-zinc-300">
        {{ title }}
      </h2>
    </div>
    
    <div class="max-w-2xl">
      <p class="font-sans font-light text-center text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
        {{ bio }}
      </p>
    </div>
    
    <!-- 技能标签 -->
    <div class="flex flex-wrap justify-center gap-2 mt-4">
      <span class="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-sm rounded-full font-medium">
        Vue.js Full Stack
      </span>
      <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-full font-medium">
        React Full Stack
      </span>
      <span class="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm rounded-full font-medium">
        TypeScript
      </span>
      <span class="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 text-sm rounded-full font-medium">
        Node.js Backend
      </span>
      <span class="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm rounded-full font-medium">
        Database Design
      </span>
      <span class="px-3 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 text-sm rounded-full font-medium">
        Microservices
      </span>
      <span class="px-3 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 text-sm rounded-full font-medium">
        Cloud Native
      </span>
      <span class="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 text-sm rounded-full font-medium">
        System Architecture
      </span>
      <span class="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm rounded-full font-medium">
        API Development
      </span>
      <span class="px-3 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 text-sm rounded-full font-medium">
        DevOps
      </span>
      <span class="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-sm rounded-full font-medium">
        Performance
      </span>
      <span class="px-3 py-1 bg-lime-100 dark:bg-lime-900/30 text-lime-700 dark:text-lime-300 text-sm rounded-full font-medium">
        Containerization
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
// 使用静态数据避免服务端渲染问题
const title = 'Full Stack Developer';
const name = 'PFinalClub';
const bio = 'Professional full-stack development team. We focus on building modern, high-performance, secure and scalable web applications and system architectures, specializing in backend development, database design, microservices architecture and cloud-native development.';
</script>

<style scoped>
.bg-gradient-to-r {
  background-size: 200% 200%;
  animation: gradient 3s ease infinite;
}

@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
</style>