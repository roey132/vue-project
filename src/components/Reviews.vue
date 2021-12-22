<script setup>
import {ref} from "vue"
import Review from "./Review.vue"

const reviews = ref([{username:"רותם הגבר", text:"עלכם כםקכ כ'ל כ/ ךכך'כך  כך'כל /'לכ לכ'ךכ ל'כ כ",stars:5},
                     {username:"רותם הלא גבר", text:"נ נח נחמ נחמן מאומן",stars:1},
                     {username:"רותם הלא גבר", text:"נ נח נחמ נחמן מאומן",stars:2},
                     {username:"רותם גבר", text:"נ נח נחמ נחמן מאומן",stars:4},
                     {username:"רותם הלא גבר", text:"נ נח נחמ נחמן מאומן",stars:1},
                     {username:"רותם גבר", text:"נ נח נחמ נחמן מאומן",stars:5},
                     {username:"רותם הכמעט גבר", text:"נ נח נחמ נחמן מאומן",stars:3}])

const showMore = ref(false)

</script>


<template>
<div v-if="!showMore" class="reviews-box show-less">
    <div  v-for="review in reviews.slice(0,3)" :key="review.index">
        <Review :stars=review.stars :username=review.username :text=review.text />
    </div>
</div>
<div v-else class="reviews-box show-more">
    <div  v-for="review in reviews" :key="review.index">
        <Review :stars=review.stars :username=review.username :text=review.text />
    </div>
</div>
<div class="show-more-container">
    <div v-if="showMore">
        <button  @click="showMore = false">הראה פחות..</button>
    </div>
    <div v-else>
        <button @click="showMore = true">הראה עוד..</button>
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
.show-less{
    max-height: 10em;
}
.show-more{
    max-height:15em;
}
button{
    background-color: rgb(224, 221, 214);
    border: none;
    font-size:1em;
    margin:0;
    height: 2em;   

}
.show-more-container{
    background-color: rgb(224, 221, 214);
    display: flex;
    justify-content: center;
    direction:rtl;
    height:3em;
}
html{
    overflow-y:scroll;
}
</style>