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
    height:100px;
    width:200px;
}
</style>