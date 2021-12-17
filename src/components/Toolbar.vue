<script setup>
import catering_logo from "../assets/catering_logo.png" 
</script>


<template>
<div class="toolbar">
    <img :src=catering_logo class="icon">
    <button id="gallery" class="toolbar-button">גלריה</button>
    <button id="contact-us" class="toolbar-button">צרו קשר</button>
</div>
</template>


<style scoped>
.toolbar{
    display:flex;
    direction:rtl;
    height:7em;
    background-color: rgb(152,194,68);
}
.icon{
    height:7em;
    width:7em;
}
.toolbar-button{
    width:20em;
    background-color: rgb(152,194,68);
}
</style>