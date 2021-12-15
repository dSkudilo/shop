<template>

    <div class="colors">
        <span class="text-grey colors__title">Colors</span>
        <div class="colors__list">
            <div class="colors__color" 
                v-for="color in colors" :key="color"
            >
                <label>
                    <input 
                        type="radio" 
                        name="color" 
                        @input="select(color)"
                    >
                    <span :style="{background:color}"></span>
                </label>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:['colors'],
    emits:['selectColor'],
    setup(_,{ emit }) {
        const select = (color) => {
            emit('selectColor',color)
        }
        return{
            select
        }
    },
}
</script>