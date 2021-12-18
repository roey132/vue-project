<script setup>
import {ref} from "vue"

const reviews = ref([{username:"רותם הגבר", text:"עלכם כםקכ כ'ל כ/ ךכך'כך  כך'כל /'לכ לכ'ךכ ל'כ כ",stars:5},
                     {username:"רותם הלא גבר", text:"נ נח נחמ נחמן מאומן",stars:1}])
</script>


<template>
<div class="reviews-box">
    <div v-for="review in reviews">
        <div class="review">
            <div class="review-title">
                <b>{{review.username}}</b>
                &nbsp;&nbsp;&nbsp;
                <p v-if="review.stars>1">{{review.stars}} כוכבים!</p>
                <p v-else>כוכב {{review.stars}} איזה הומו נודר</p>
            </div>
            <br>
            <p>{{review.text}}</p>
            <br>
        </div>
    </div>
</div>
</template>

  
<style scoped>
.reviews-box{
    background-color: rgb(224, 221, 214);
}
.review{
    margin-right:5em;
}
.review-title{
    direction: rtl;
    display:flex;
    justify-content: flex-start;
    align-items: flex-end;
}
b{
    font-size:25px;
}
p{
    direction: rtl;
    font-size: 20px;
    margin:0;
}
</style>