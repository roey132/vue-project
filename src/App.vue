<script setup>
import Toolbar from './components/Toolbar.vue'
import HomePage from './components/HomePage.vue'
import Footer from './components/AppFooter.vue'
</script>

<template>
<Toolbar/>
<HomePage/>
<Footer/>
</template>

<style>
#app {

}
#app > *{
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body{
  padding:0;
  margin:0;

}
</style>
