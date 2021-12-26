<script setup>
defineProps({
    stars: Number,
    username: String,
    text: String
})
</script>

<template>
<div class="review">
    <div class="review-title">
        <b>{{username}}</b>
        &nbsp;&nbsp;&nbsp;
        <p v-if="stars>1">{{stars}} כוכבים!</p>
        <p v-else>כוכב {{stars}} איזה הומו נודר</p>
    </div>
    <p>{{text}}</p>
</div>
</template>

<style scoped>
.review{
    height: 3em;
}
.review-title{
    direction: rtl;
    display:flex;
    justify-content: flex-start;
    align-items: flex-end;
}
b{
    font-size:1em;
    line-height:1em;
}
p{
    direction: rtl;
    font-size: 1em;
    line-height:1em;
    margin:0;
}
</style>