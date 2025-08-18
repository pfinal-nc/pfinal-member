<template>
    <div class="fixed top-4 right-4 z-50">
        <UButton 
            aria-label="button to switch theme dark to light" 
            @click="toggleDark" 
            variant="link" 
            color="white"
            icon="i-heroicons-moon" 
        />
    </div>
</template>

<script lang="ts" setup>
// 简化的主题切换功能
function toggleDark() {
    // 简单的主题切换逻辑
    const html = document.documentElement;
    const isDark = html.classList.contains('dark');
    
    if (isDark) {
        html.classList.remove('dark');
    } else {
        html.classList.add('dark');
    }
}
</script>

<style>

</style>