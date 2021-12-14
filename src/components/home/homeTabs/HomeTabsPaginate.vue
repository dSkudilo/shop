<template>
    <div class="tabs-paginate">
        <label class="tabs-paginate__radio"
                v-for="(item, idx) in pageValue" 
                :key="idx"
            > 
                <input 
                    type="radio" 
                    name="paginate" 
                    class="tabs-paginate__real"
                    :checked="idx == step - 1"
                    @click="changeStep(idx)"
                >
                <span class="tabs-paginate__fake"></span>
        </label>
    </div>
</template>
<script>

export default {
    props:['pageValue','step'],
    emits:['changePag'],
    setup(_,{emit}) {
        const changeStep = (id) => {
            emit('changePag',id + 1)
        }
        return{
            changeStep,
           
        }
    },
}
</script>