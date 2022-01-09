<script setup>
import Picture from './Picture.vue'
import { ref } from 'vue'

defineProps({
    typeFilter:String,
    imagesArray:Array
})

//in futrure code make this read files from database

</script>

<template>

    <div v-if="typeFilter==='all'">
        <div class="picture-flex">
            <Picture  v-for="picture in imagesArray" :key="picture.index" :image="picture" />
        </div>
    </div >
    <div v-else>
        <div class="picture-flex">
            <Picture  v-for="picture in imagesArray.filter(name => name.includes(typeFilter))" :key="picture.index" :image="picture" />
        </div>
    </div>

</template>

<style scoped>
.picture-flex{
    display: flex;
    flex-wrap: wrap;
    width:70em;
    margin-left: auto;
    margin-right: auto;

}
</style>