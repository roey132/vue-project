<script setup>
defineProps({
    pageValue:String,
    pageName:String
})

const emit = defineEmits(['change-page'])

function changePage(pageValue) {
    emit('change-page',pageValue)
}
</script>

<template>

<button @click="changePage(pageValue)" id="gallery" class="toolbar-button">{{pageName}}</button>

</template>

<style scoped>
.toolbar-button{
    width:7em;
    background-color: rgb(152,194,68);
    font-size: 15px;
    border:0;
}
</style>