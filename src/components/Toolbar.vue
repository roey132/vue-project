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
	-webkit-box-shadow: 0 8px 6px -6px black;
	-moz-box-shadow: 0 8px 6px -6px black;
	box-shadow: 0 8px 6px -6px black;
    position: fixed;
    top:0;
    width:100%;
}

.icon{
    height:7em;
    width:7em;
}
.toolbar-button{
    width:5em;
    background-color: rgb(152,194,68);
    font-size: 3em;
}
</style>