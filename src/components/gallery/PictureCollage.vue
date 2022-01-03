<script setup>
import Picture from './Picture.vue'
import { ref } from 'vue'

var images = []
for(let i=1 ; i < 100; i++){
    images.push('meat'+i+".png")
    console.log('meat'+i+".png")
}
const imagesList = ref(images)

</script>

<template>
<div class="picture-flex">
    <Picture v-for="picture in imagesList" :key="picture.index" :image="picture" />
</div>

</template>

<style scoped>
.picture-flex{
    display: flex;
    flex-wrap: wrap;
    width:70%;
    margin-left:15%;
    margin-right: 15%;

}
</style>