<script setup>
import catering_logo from "@/assets/catering_logo.png" 
import PageButton from "./PageButton.vue"

const emit = defineEmits(['change-page'])

function changePage(pageValue) {
    emit('change-page',pageValue)
}

const buttons = [{"pageName":"עמוד בית","pageValue":"home"},
                {"pageName":"גלריה","pageValue":"gallery"},
                {"pageName":"צור קשר","pageValue":"contact"},
                {"pageName":"בלוג","pageValue":"blog"}]


</script>


<template>
<div class="toolbar">
    <img :src=catering_logo class="icon">
    <PageButton v-for="button in buttons" :key="button.index" :pageValue=button.pageValue :pageName=button.pageName @change-page="changePage"/>

</div>
</template>


<style scoped>
.toolbar{
    display:flex;
    direction:rtl;
    height:5em;
    background-color: rgb(152,194,68);
	-webkit-box-shadow: 0 8px 6px -6px black;
	-moz-box-shadow: 0 8px 6px -6px black;
	box-shadow: 0 8px 6px -6px black;
    position: relative;
    top:0;
    width:100%;
}

.icon{
    height:4.8em;
    width:4.8em;
    padding:0.1em;
    border-radius: 100px;
}
.toolbar-button{
    width:7em;
    background-color: rgb(152,194,68);
    font-size: 15px;
    border:0;
}
</style>