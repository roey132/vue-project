<script setup>
import banner_photo from "@/assets/banner_photo.png"
</script>


<template>
<div class="intro-banner">
    <img :src=banner_photo class="banner-photo">
    <div class="banner-text">
        <h1 class="banner-title-1">זיו אהרונוב</h1>
        <h1 class="banner-title-2">שף לאירועים</h1>
        <p class="banner-info"> פה כתוב כמה דברים שמסבירים דברים על הסלוגן המעניין <br>
        וגם פה עומד להיות כתוב דברים מעניינים<br>
        פה לא בטוח שיהיה כתוב כי 3 שורות זה הרבה<br>
        </p>
    </div>
</div>
</template>


<style scoped>
.intro-banner{
    height: 30em;
    display:flex;
    justify-content: space-between;
    background-color: rgb(224, 221, 214);
	-webkit-box-shadow: 0 8px 6px -6px black;
	-moz-box-shadow: 0 8px 6px -6px black;
	box-shadow: 0 8px 6px -6px black;
}
.banner-photo{
    height:28em;
    width:28em;
    padding:1em;
    margin-left: 1em;
}
.banner-text{
    display:flex;
    flex-direction: column;
    justify-content: top;
    align-items: right;
    text-align: right;
    padding-right:7em;
}
.banner-title-1, .banner-title-2{
    font-size:60px;
    margin-top: 0;
    line-height:40px;
}
.banner-title-1{
margin-bottom:0;
margin-top: 60px;
}

.banner-title-2{
    padding:0;
    margin-top:3px;
    margin-bottom:40px;
    margin-right:180px;
}
.banner-info{
    font-size:23px;
}
</style>