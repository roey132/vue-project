<script setup>
import Toolbar from './components/toolbar/Toolbar.vue'
import HomePage from './components/homepage/HomePage.vue'
import AppFooter from './components/footer/AppFooter.vue'
import Gallery from './components/gallery/Gallery.vue'
import ContactPage from './components/contact_page/ContactPage.vue'

import { ref } from 'vue'
const page = ref("contact")
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
    <ContactPage v-else-if="page === 'contact'" />
    
    <AppFooter/>
  </v-main>
</v-app>

</template>

<style>

#app > *{
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: rgb(152,194,68);
}
body{
  padding:0;
  margin:0;
}
</style>
