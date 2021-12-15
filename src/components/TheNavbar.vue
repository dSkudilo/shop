<template>
    <nav class="nav" 
        @click="showMobile"
    >
    <button 
        class="nav__menu"
        :class="{nav__menu_dark:navFlag}"    
    >menu</button>
        <ul class="nav__list" 
            :class="{nav__list_hidden:!navFlag}" 
            
        >
           <router-link 
                :to="{name:'home'}"
                custom
                v-slot="{href, navigate, isActive}"
            >
                <li 
                    class="nav__item"
                    :class="{'nav__item_active':isActive}"
                    @click="navigate"
                >
                    <a 
                        :active="isActive" 
                        :href="href"
                        class="nav__link">
                        Главная
                    </a>
                </li>
            </router-link>
            <router-link 
                :to="{name:'products'}"
                custom
                v-slot="{href, navigate, isActive}"
            >
                <li 
                    class="nav__item"
                    :class="{'nav__item_active':isActive}"
                    @click="navigate"
                >
                    <a 
                        :active="isActive" 
                        :href="href"
                        class="nav__link">
                        Магазин
                    </a>
                </li>
            </router-link>
            <router-link 
                :to="{name:'about'}"
                custom
                v-slot="{href, navigate, isActive}"
            >
                <li 
                    class="nav__item"
                    :class="{'nav__item_active':isActive}"
                    @click="navigate"
                >
                    <a 
                        :active="isActive" 
                        :href="href"
                        class="nav__link">
                        О нас
                    </a>
                </li>
            </router-link>
        </ul>
    </nav>
</template>
<script>
import { ref } from '@vue/reactivity'
export default {
    setup() {
        const navFlag = ref(false)
        const showMobile = () => {
            navFlag.value = !navFlag.value
        }
        return{
            showMobile,navFlag
        }
    },
}
</script>