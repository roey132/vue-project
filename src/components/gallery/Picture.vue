<script setup>

const props = defineProps({
    image:String
})


</script>

<template>
<div class="container">
    <img :src="'/gallery/'+image">
</div>

</template>

<style scoped>
.container{
    display: flex;
    justify-content: center;
    align-items: center;
    width:19%;
    height:200px;
    margin-left: 0.5%;
    margin-right: 0.5%;
    margin-bottom: 10px;
    overflow: hidden;
}
img{
    width:300px;
    height:300px;
}
</style>