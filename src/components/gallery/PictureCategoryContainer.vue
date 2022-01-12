<script setup>
import GalleryModal from './GalleryModal.vue'
import Picture from "./Picture.vue"
import { defineExpose, ref } from 'vue'

const modal = ref(null)

defineExpose({ modal })

defineProps({
    category:String,
    pictures:Array
})
const modalImage = ref("desserts1.png")

function changeModalImage(image){
    modalImage.value = image
}

</script>

<template>
<GalleryModal ref="modal" :image="modalImage" />

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