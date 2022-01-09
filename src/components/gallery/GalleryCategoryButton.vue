<script setup>
defineProps({
    value:String,
    title:String
})

const emit = defineEmits(['gallery-type'])

function myfunc(value) {
    emit('gallery-type',value)
}
</script>

<template>
    <button @click="myfunc(value)">
        {{title}}
    </button>
</template>

<style scoped>
button{
    font-size:16px;
    height:100px;
    width:200px;
    border:none;
    border-right:1px solid;

}
button:first-child{
    border-left:1px solid; 
}
</style>