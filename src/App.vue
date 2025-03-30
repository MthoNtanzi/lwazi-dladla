<script>
import Navbar from './components/Navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>

<template>
  <div>
    <Navbar />
    <router-view />
  </div>
</template>

<style>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    scroll-behavior: smooth;
  }

  body{
    background-color: #1f2020;
    color: #fff;
  }
</style>
