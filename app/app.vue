<template>
  <UApp>
    <ClientOnly>
      <ColorScheme />
    </ClientOnly>
    <NuxtPage />
  </UApp>
</template>

<script setup>
// 导入 useColorMode
import { useColorMode } from '#imports'

// 初始化颜色模式 - 只在客户端执行
if (process.client) {
  const colorMode = useColorMode()
}
</script>