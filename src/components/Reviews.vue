<script setup>
import {ref} from "vue"

const reviews = ref([{username:"רותם הגבר", text:"עלכם כםקכ כ'ל כ/ ךכך'כך  כך'כל /'לכ לכ'ךכ ל'כ כ",stars:5},
                     {username:"רותם הלא גבר", text:"נ נח נחמ נחמן מאומן",stars:1}])

const showMore = ref(false)

</script>


<template>
<div class="reviews-box">
    <div v-for="review in reviews.slice(0,3)" :key="review.index">
        <div class="review">
            <div class="review-title">
                <b>{{review.username}}</b>
                &nbsp;&nbsp;&nbsp;
                <p v-if="review.stars>1">{{review.stars}} כוכבים!</p>
                <p v-else>כוכב {{review.stars}} איזה הומו נודר</p>
            </div>
            <p>{{review.text}}</p>
        </div>
    </div>
</div>
</template>

  
<style scoped>
.reviews-box{
    background-color: rgb(224, 221, 214);
    overflow:scroll;
    overflow-x: hidden;
    overflow-y: auto;
}
.reviews-box-show-less{
    max-height: 9em;
}

.reviews-box-show-more{
    max-height:15em;
}
.review{
    margin-right:5em;
    height: 3em;
}
.review-title{
    direction: rtl;
    display:flex;
    justify-content: flex-start;
    align-items: flex-end;
}
b{
    font-size:1.2em;
    line-height:1.2em;
}
p{
    direction: rtl;
    font-size: 1em;
    line-height:1em;
    margin:0;
}
</style>