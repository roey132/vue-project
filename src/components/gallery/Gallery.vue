<script setup>
import Picture from './Picture.vue'
import PictureCategoryContainer from './PictureCategoryContainer.vue';
import { ref } from 'vue'

const galleryType = ref("all")
var imagesArray = []

const modalImage = ref("test")


for(let i=1 ; i < 100; i++){
    var img = {"link":'meat'+i+'.png', 'index':i, 'type':'meat'}
    imagesArray.push(img)
    img = {"link":'event_background'+i+'.png', 'index':i, 'type':'event_background'}
    imagesArray.push(img)
    img = {"link":'desserts'+i+'.png', 'index':i, 'type':'desserts'}
    imagesArray.push(img)
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
    :pictures="imagesArray.filter(name => name['type'].includes(type.value)).slice(0,5)" />
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
.dialog-container{
    width:1000px;
    height:600px;
    background-color: gray;
}
.dialog{
    position: absolute;
    top: 0;
}
</style>