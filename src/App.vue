<script setup>
import Toolbar from './components/toolbar/Toolbar.vue'
import HomePage from './components/homepage/HomePage.vue'
import AppFooter from './components/footer/AppFooter.vue'
import Gallery from './components/gallery/Gallery.vue'
import { ref } from 'vue'
const page = ref("home")
function changePage(pageValue){
  page.value = pageValue
}
</script>

<template>
<v-app>
  <v-main>
    <Toolbar @change-page="changePage" />
    <HomePage v-if="page === 'home'"/>
    <Gallery v-else-if="page === 'gallery'"/>
    
    <AppFooter/>
  </v-main>
</v-app>

</template>

<style>

#app > *{
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
body{
  padding:0;
  margin:0;
}
</style>
