<script setup>
import desserts from "@/assets/desserts.png"
import meat from "@/assets/meat.png"
import event_background from "@/assets/event_background.png"
</script>

<template>
<div class="picture-trio">
    <div class="image-container">
        <img :src=desserts class="image">
        <div class="centered">קינוחים</div>
    </div>
    <div class="image-container">
        <img :src=meat class="image">
        <div class="centered">בשרים</div>
    </div>
    <div class="image-container">
        <img :src=event_background class="image">
        <div class="centered">אירועים</div>
    </div>
</div>
</template>

<style scoped>
.image-container{
  position: relative;
  text-align: center;
  color: black;
  overflow: hidden;
}

.centered {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 3rem;
    background-color: rgba(200,200 ,200, 0.9);
    text-align: center;
    line-height: 2.5rem;
    border-radius: 5px;
    padding: 1rem;
    padding-right: 15rem;
    padding-left:15rem;
}
.picture-trio{
    height:30vw;
    display:flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: rgb(236,233,228);
}
.image{
    object-fit: cover;
    border-radius: 40px;
    height:17.857vw;
    width:25vw;
}
</style>