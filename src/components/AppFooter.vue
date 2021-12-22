<script setup>
import whatsapp from "../assets/whatsapp.png"
import instagram from "../assets/instagram.png"
import facebook from "../assets/facebook.png"
</script>

<template>
<div class="footer">
    <img :src=whatsapp class="icon">
    <img :src=instagram class="icon">
    <img :src=facebook class="icon">
</div>
</template>

<style scoped>
.icon{
    width:1.5em;
    height:1.5em;
}
</style>