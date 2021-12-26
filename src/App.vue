<script setup>
import Toolbar from './components/Toolbar.vue'
import HomePage from './components/homepage/HomePage.vue'
import AppFooter from './components/footer/AppFooter.vue'
</script>

<template>
<Toolbar/>
<HomePage/>
<AppFooter/>
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
