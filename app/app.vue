<template>
  <UApp>
    <ColorScheme />
    <NuxtPage />
  </UApp>
</template>

<script setup>
// 初始化颜色模式
const colorMode = useColorMode()
</script>