<script setup>
import banner_photo from "../assets/banner_photo.png"
</script>


<template>
<div class="intro-banner">
    <img :src=banner_photo class="banner-photo">
    <div class="banner-text">
        <h1 class="banner-title">כתוב פה סלוגן מעניין</h1>
        <p class="banner-info"> פה כתוב כמה דברים שמסבירים דברים על הסלוגן המעניין <br>
        וגם פה עומד להיות כתוב דברים מעניינים<br>
        פה לא בטוח שיהיה כתוב כי 3 שורות זה הרבה<br>
        </p>
    </div>



</div>
</template>


<style scoped>
.intro-banner{
    height: 40em;
    display:flex;
    justify-content: space-between;
}
.banner-photo{
    height:38em;
    padding:1em;
}
.banner-text{
    text-align: right;
    padding-right:7em;
}
.banner-title{
    font-size:8em;
}
.banner-info{
    font-size:3em;
}
</style>