<script setup>
import GalleryModal from './GalleryModal.vue'
import Picture from "./Picture.vue"
import { ref } from 'vue'

defineProps({
    category:String,
    pictures:Array
})
const modalImage = ref("desserts1.png")
const modalBool = ref(false)
const currIndex = ref(0)

function changeModalImage(image,images){
    currIndex.value = images.findIndex((element) => element['index'] === image)
    modalImage.value = images[currIndex.value]
    modalBool.value=true
}
function swapModalLeft(images){
    if(currIndex.value !== 0 ){
        currIndex.value--
        modalImage.value = images[currIndex.value]
    }
}
function swapModalRight(images){
    if(currIndex.value !== 4){
        currIndex.value++
        modalImage.value = images[currIndex.value]
    }
}
</script>

<template>
<GalleryModal v-if="modalBool" :image="modalImage" @close-modal="modalBool=false" @swap-left="swapModalLeft(pictures)" @swap-right="swapModalRight(pictures)" />

<div class="title-container">
    <h1>{{category}}</h1>
</div>

<div class="pictures-flex">
    <Picture  v-for="picture in pictures.slice(0,5)" :key="picture['index']" :image="picture['link']" @click="changeModalImage(picture['index'],pictures)"/>
</div>
  
</template>

<style scoped>
.pictures-flex{
    display:flex;
    justify-content: space-around;
    align-content: center;
    width:70em;
    margin-right: auto;
    margin-left: auto;
}

h1{
    background-color: rgb(236,233,228);
    direction: rtl;
    margin:0;
}
h1:first-child{
    padding-top:1em;
}
.title-container{
    width:70em;
    margin-right: auto;
    margin-left: auto;
}
</style>