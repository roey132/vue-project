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

function changeModalImage(image){
    modalImage.value = image
    modalBool.value=true
}
</script>

<template>
<GalleryModal v-if="modalBool" :image="modalImage" @close-modal="modalBool=false"/>

<div class="title-container">
    <h1>{{category}}</h1>
</div>

<div class="pictures-flex">
    <Picture  v-for="picture in pictures" :key="picture.index" :image="picture" @click="changeModalImage(picture)"/>
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