<script setup>
import Picture from './Picture.vue'
import { ref } from 'vue'

defineProps({
    typeFilter:String
})

//in futrure code make this read files from database
var images = []
for(let i=1 ; i < 100; i++){
    images.push('meat'+i+".png")
}
for(let i=1 ; i < 100; i++){
    images.push('event_background'+i+".png")
}
for(let i=1 ; i < 100; i++){
    images.push('desserts'+i+".png")
}
const imagesList = ref(images)
</script>

<template>

    <div v-if="typeFilter==='all'">
        <div class="picture-flex">
            <Picture  v-for="picture in imagesList" :key="picture.index" :image="picture" />
        </div>
    </div >
    <div v-else>
        <div class="picture-flex">
            <Picture  v-for="picture in imagesList.filter(name => name.includes(typeFilter))" :key="picture.index" :image="picture" />
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