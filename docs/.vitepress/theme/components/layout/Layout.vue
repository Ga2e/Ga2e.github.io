<template>
    <div class=" max-w-[68.75rem] sticky top-0 mt-7 max-md:mt-0 overflow-hidden h-[80px]">
        <div ref :class="isAtTop ? 'opacity-0' : ''"
            class=" transition-opacity duration-[200ms] ease-in-out absolute  inset-0 h-[200%] backdrop-blur-md bg-[linear-gradient(to_bottom,hsl(0deg_0%_95%)_0%,transparent_50%)]">
        </div>
        <div class=" h-full relative  max-w-6xl px-6 flex items-center">
            <span class="  max-w-fit text-4xl font-isometra">Ga2e</span>
        </div>
    </div>
    <div></div>
    <div id="home-context" class="max-w-[68.75rem] grid  content-center border border-solid border-[hsl(210deg_8%_50%)] ">
        <div class="flex items-center justify-center border border-solid border-[hsl(210deg_8%_50%)] content-center">aaaaa</div>
        
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const isAtTop = ref(true)     // 是否在页面顶部

function onScroll() {
    isAtTop.value = window.scrollY <= 0
}

onMounted(() => {
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll() // 初始化，防止刷新时已在中间位置
})

onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
})
</script>
<style scoped>
#home-context{
    grid-template-areas: 
    'newest '
    ;
}
#home-context > :nth-child(2),
#home-context > :nth-child(1)
{

}
</style>