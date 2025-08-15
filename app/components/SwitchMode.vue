<template>
    <div class="fixed top-4 right-4 z-50">
        <ClientOnly>
            <UButton 
                aria-label="button to switch theme dark to light" 
                @click="toggleDark" 
                variant="link" 
                color="white"
                :icon="color.preference === 'dark' ? 'i-heroicons-sun' : 'i-heroicons-moon'" 
            />
            <template #fallback>
                <UButton 
                    aria-label="button to switch theme dark to light" 
                    @click="toggleDark" 
                    variant="link" 
                    color="white"
                    icon="i-heroicons-moon" 
                />
            </template>
        </ClientOnly>
    </div>
</template>

<script lang="ts" setup>
// 导入 useColorMode
import { useColorMode } from '#imports'

// 只在客户端执行颜色模式相关代码
let color: any = null;

if (process.client) {
    color = useColorMode();
}

function toggleDark() {
    if (color) {
        color.preference = color.preference === 'dark' ? 'light' : 'dark';
    }
}
</script>

<style>

</style>