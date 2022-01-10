<script setup>

const props = defineProps({
    image:String
})


</script>

<template>
<div class="container">
    <img class="image" :src="'/gallery/'+image">
</div>

</template>

<style scoped>
.container{
    display: flex;
    justify-content: center;
    align-items: center;
    width:13em;
    height:13em;
    margin:0.25em;
    overflow: hidden;
    border:2px solid transparent;
    padding: 2px;
    border-radius: 5px;
    transition-duration: 0.08s;
}
.image{
    width:13em;
    height:13em;
    object-fit: cover;
    border-radius: 5px;
}
.container:hover{
    border:2px solid gray;
}
</style>