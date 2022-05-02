<script setup>
import Picture from "./Picture.vue"
import {useRoute} from "vue-router"
import * as data from '@/data.js'

console.log(useRoute().params.category)

const pictures = data.imagesArrayCategory(useRoute().params.category)

defineProps({
    pictures:Array,
})

</script>

<template>
<div class="category-gallery">
    <div class="gallery-flex">
        <Picture class="picture" v-for="picture in pictures" :key="picture['index']" :image="picture['link']"/>
    </div>
</div>

</template>

<style scoped>
.category-gallery{
    background-color: rgb(236,233,228);
}
.gallery-flex{
    display: flex;
    flex-wrap: wrap;
    width:80%;
    margin-left: auto;
    margin-right: auto;
    padding-top: 5em;
}
.picture{
    width: 13rem;
    height:13rem;
}
</style>