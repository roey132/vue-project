<script setup>
import Picture from './Picture.vue'
import PictureCategoryContainer from './PictureCategoryContainer.vue';
import { ref } from 'vue'

const galleryType = ref("all")

var imagesArray = []
for(let i=1 ; i < 100; i++){
    imagesArray.push('meat'+i+".png")
    imagesArray.push('event_background'+i+".png")
    imagesArray.push('desserts'+i+".png")
}

function changeType(type){
    galleryType.value = type 
    console.log(galleryType.value)
}

const galleryTypes = [{"title":"בשרים","value":"meat"},
                     {"title":"קינוחים","value":"desserts"},
                     {"title":"אירועים","value":"event_background"}]
</script>


<template>
<div class="gallery">
    <PictureCategoryContainer class="container" v-for="type in galleryTypes" :key="type.index" :category="type.title"
    :pictures="imagesArray.filter(name => name.includes(type.value)).slice(0,5)" />
</div>

</template>


<style scoped>
.buttons-flex{
    display:flex;
    width:100%;
    justify-content: center;
    align-items: center;
}
.gallery{
    background-color: rgb(236,233,228);
    padding-bottom: 2em;
}
html{
    background-color: rgb(236,233,228);
}
</style>