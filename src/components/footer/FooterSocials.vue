<script setup>
import whatsapp from "@/assets/whatsapp.png"
import instagram from "@/assets/instagram.png"
import facebook from "@/assets/facebook.png"
</script>

<template>
<div class="socials">
    <h1>מצאו אותנו ברשתות</h1>
    <div class="icons-flex">
        <button class="icon-container">
            <img :src=whatsapp class="icon-img">
        </button>
        <button class="icon-container">
            <img :src=instagram class="icon-img">
        </button>
        <button class="icon-container">
            <img :src=facebook class="icon-img">
        </button>     
    </div>
</div>
</template>

<style scoped>

.icon-img{
    width: 1.5em;
    height: 1.5em;
}
.icons-flex{
    display:flex;
    align-content: center;
    justify-content: center;
    height:3em;
}
.social{
    width:30%;
    display:flex;
    flex-direction: column;
}
.icon-container{
    width: 2.5em;
    height: 2.5em;
    display:flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    background-color: rgba(100, 100, 100, 0);
    border-radius: 100em;
    border:none;
    margin:1em;

    transition-duration: 0.3s;
}
.icon-container:hover{
    background-color: rgba(100,100, 100, 0.5);
}
h1, p{
    text-align: center;
}
h1{
    font-size: 1.5em;
}
</style>