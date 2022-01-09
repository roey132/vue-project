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
}

</style>