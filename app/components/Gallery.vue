<template>
  <div class="w-full">
    <ClientOnly>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 auto-rows-fr">
        <template v-for="(image, index) in images" :key="index">
        <div 
          class="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full"
          :class="{
            'lg:col-span-2 lg:row-span-2 xl:col-span-2 xl:row-span-2': index === 1,
            'lg:col-span-2 xl:col-span-1': index === 4,
            'lg:col-span-1 xl:col-span-1': ![1, 4].includes(index)
          }"
        >
          <!-- 图片容器 -->
          <div class="relative w-full h-full aspect-square overflow-hidden">
            <Image 
              :src="image" 
              :alt="`作品展示 ${index + 1}`"
            />
            
            <!-- 悬停遮罩 -->
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center pointer-events-none">
              <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <UIcon 
                  name="i-heroicons-eye" 
                  class="text-white text-2xl" 
                />
              </div>
            </div>
          </div>
          
          <!-- 图片信息 -->
          <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none">
            <p class="text-white text-sm font-medium">
              {{ getImageTitle(index) }}
            </p>
            <p class="text-white/70 text-xs mt-1">
              {{ getImageDescription(index) }}
            </p>
          </div>
        </div>
      </template>
      </div>
      <template #fallback>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          <div v-for="i in 12" :key="i" class="aspect-square bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse"></div>
        </div>
      </template>
    </ClientOnly>
  </div>
</template>

<script lang="ts" setup>
// 使用静态数据避免服务端渲染问题
const images = [
  // 前端开发
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center",
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop&crop=center",
  "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop&crop=center",
  
  // 移动开发
  "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&crop=center",
  "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&h=600&fit=crop&crop=center",
  
  // UI/UX 设计
  "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop&crop=center",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop&crop=center",
  
  // 团队协作
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&crop=center",
  "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&crop=center",
  
  // 代码开发
  "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=600&fit=crop&crop=center",
  "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=600&fit=crop&crop=center",
  
  // 项目管理
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&crop=center",
  "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop&crop=center"
];

// 获取图片标题
const getImageTitle = (index: number) => {
  const titles = [
    'Frontend Development',
    'Data Analysis',
    'Code Programming',
    'Backend Development',
    'Tech Conference',
    'System Architecture',
    'API Development',
    'Team Collaboration',
    'Database Design',
    'Project Management',
    'Team Discussion',
    'Project Planning'
  ];
  return titles[index] || `Work ${index + 1}`;
};

// 获取图片描述
const getImageDescription = (index: number) => {
  const descriptions = [
    'Modern Web Application Development',
    'Data Visualization & Analysis',
    'Efficient Code Writing',
    'Backend Application Development',
    'Tech Exchange & Sharing',
    'System Architecture Design',
    'Full Stack Development Practice',
    'Team Collaborative Development',
    'Code Quality Optimization',
    'Agile Project Management',
    'Technical Solution Discussion',
    'Project Requirements Analysis'
  ];
  return descriptions[index] || 'Professional Development Services';
};
</script>

<style scoped>
/* 添加图片加载动画 */
.group {
  animation: fadeInUp 0.6s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 为不同图片添加不同的动画延迟 */
.group:nth-child(1) { animation-delay: 0.1s; }
.group:nth-child(2) { animation-delay: 0.2s; }
.group:nth-child(3) { animation-delay: 0.3s; }
.group:nth-child(4) { animation-delay: 0.4s; }
.group:nth-child(5) { animation-delay: 0.5s; }
.group:nth-child(6) { animation-delay: 0.6s; }
.group:nth-child(7) { animation-delay: 0.7s; }
.group:nth-child(8) { animation-delay: 0.8s; }
.group:nth-child(9) { animation-delay: 0.9s; }
.group:nth-child(10) { animation-delay: 1.0s; }
.group:nth-child(11) { animation-delay: 1.1s; }
.group:nth-child(12) { animation-delay: 1.2s; }

/* 确保网格行高度一致 */
.auto-rows-fr {
  grid-auto-rows: 1fr;
}

/* 确保所有图片容器高度一致 */
.group {
  height: 100%;
  min-height: 0;
}

.aspect-square {
  aspect-ratio: 1 / 1;
  width: 100%;
  height: 100%;
}

/* 特殊布局样式 */
.lg\:row-span-2 {
  grid-row: span 2 / span 2;
}

.xl\:row-span-2 {
  grid-row: span 2 / span 2;
}
</style>