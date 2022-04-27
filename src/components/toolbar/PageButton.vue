<script setup>
defineProps({
    pageValue:String,
    pageName:String
})

</script>

<template>

<router-link :to="pageValue" custom v-slot="{ navigate, href }">
  <button class="toolbar-button" :href="href" @click="navigate">{{ pageName }}</button>
</router-link>

</template>

<style scoped>
.toolbar-button{
    width:7em;
    background-color: rgb(152,194,68);
    font-size: 17px;
    border:0;
    font-weight: 500;
}
</style>