<script setup>
import GalleryCategoryButtonVue from './GalleryCategoryButton.vue';
import Picture from './Picture.vue'
import PictureCollage from './PictureCollage.vue'
import { ref } from 'vue'

const galleryType = ref("all")


function changeType(type){
    galleryType.value = type 
    console.log(galleryType.value)
}

const galleryTypes = [{"title":"הכל","value":"all"},
                     {"title":"בשרים","value":"meat"},
                     {"title":"קינוחים","value":"desserts"},
                     {"title":"אירועים","value":"event_background"}]
</script>


<template>
<div class="buttons-flex">
    <GalleryCategoryButtonVue v-for="type in galleryTypes" :key="type.index" :title="type.title" :value="type.value" @gallery-type="changeType" />
</div>
<PictureCollage :typeFilter="galleryType"/>
</template>


<style scoped>
.buttons-flex{
    display:flex;
    width:100%;
    justify-content: center;
    align-items: center;
}
</style>