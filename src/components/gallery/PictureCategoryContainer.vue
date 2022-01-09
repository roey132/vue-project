<script setup>
import Picture from "./Picture.vue"
import { ref } from "vue"
defineProps({
    category:String,
    pictures:Array
})

</script>

<template>
<div class="title-container">
    <h1>{{category}}</h1>
</div>
<div class="pictures-flex">
    <Picture v-for="picture in pictures" :key="picture.index" :image="picture"/>
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
    direction: rtl;
}
.title-container{
    width:70em;
    margin-right: auto;
    margin-left: auto;
}
</style>