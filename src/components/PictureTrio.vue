<script setup>
import desserts from "../assets/desserts.png"
import meat from "../assets/meat.png"
import event_background from "../assets/event_background.png"
</script>

<template>
<div class="picture-trio">
    <div class="image-container">
        <img :src=desserts class="image">
    </div>
    <div class="image-container">
        <img :src=meat class="image">
    </div>
    <div class="image-container">
        <img :src=event_background class="image">
    </div>
</div>
</template>

<style scoped>
.picture-trio{
    height:30vw;
    display:flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: rgb(236,233,228);
}
.image{
    border-radius: 40px;
    height:17.857vw;
    width:25vw;
}
</style>