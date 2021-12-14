<template>
    <the-header />
    <the-aside />
    <div class="with-nav with-aside wrapper">
        <main class="main">
            <router-view />
        </main>
        
    </div>
    
</template>
<script>
import TheHeader from '../components/TheHeader.vue'
import TheAside from '../components/TheAside.vue'
import TheFooter from '../components/TheFooter.vue'
export default {
    components:{TheHeader,TheAside,TheFooter}
}
</script>