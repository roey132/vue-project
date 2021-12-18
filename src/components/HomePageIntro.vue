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
    margin-top: 7em;
    height: 40em;
    display:flex;
    justify-content: space-between;
    background-color: rgb(224, 221, 214);
	-webkit-box-shadow: 0 8px 6px -6px black;
	-moz-box-shadow: 0 8px 6px -6px black;
	box-shadow: 0 8px 6px -6px black;
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
    font-size:6em;
}
.banner-info{
    font-size:3em;
}
</style>