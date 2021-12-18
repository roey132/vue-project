<script setup>
import {ref} from "vue"

const reviews = ref([{username:"test test", text:"fmjiwem mfeif fklf fie fk kfefe fowo3fo fekf, fefm fwf, fwfwfp,ffwf!",stars:5},
                     {username:"test test", text:"fmjiwem mfeif fklf fie fk kfefe fowo3fo fekf, fefm fwf, fwfwfp,ffwf!",stars:5}])
</script>


<template>
<div v-for="review in reviews">
    <h1>{{review.username}}</h1>
    <p>gave {{review.stars}} stars!</p>
    <p>{{review.text}}</p>

</div>
</template>

  
<style scoped>


</style>