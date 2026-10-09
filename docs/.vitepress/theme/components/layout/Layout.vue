<template>

    <div class="  sticky top-0 mt-7 max-sm:mt-0 overflow-hidden h-[80px]">
        <div ref :class="isAtTop ? 'opacity-0' : ''"
            class=" transition-opacity duration-[200ms] ease-in-out absolute  inset-0 h-[200%] backdrop-blur-md bg-[linear-gradient(to_bottom,hsl(0deg_0%_95%)_0%,transparent_50%)]">
        </div>
        <div class=" h-full relative  max-w-6xl px-6 flex items-center">
            <span class="  max-w-fit text-4xl font-isometra">Ga2e</span>
        </div>
    </div>
    <div class=" h-48 ">


    </div>


    <div id="home-context" class="max-w-[64rem]   mx-auto  h-[1000px] grid  content-center border border-solid border-[hsl(210deg_8%_50%)] ">
        <div id=" context-section" class="max-sm:col-span-2  row-span-2  grid border border-solid border-[hsl(210deg_8%_50%)] ">
            <article class="" v-for="posts in posts.slice(0,1)" :key="posts.url">
                <span class="text-xl" >{{posts.title}}</span>
                <p class="p" v-html="posts.excerpt"></p>
                <div>go to</div>
            </article>
        
        </div>
        <div id="aa" class="max-sm:col-span-2  flex items-center justify-center border border-solid border-[hsl(210deg_8%_50%)] content-center">aaaaa</div>
        <div id="bb" class="max-sm:col-span-2 flex items-center justify-center border border-solid border-[hsl(210deg_8%_50%)] content-center">aaaaa</div>
 
    </div>

    
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import {data as posts} from '../../page.data'
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
    'newest class'
    'newest block'
    ;
     grid-template-columns: 1fr 1fr;
      grid-template-rows: auto 1fr ;
      gap: 30px;
}

</style>