<!-- template of file src/App.vue -->
<template>
  <base-layout>
    <home-page style="color: red;"/>
  </base-layout>
</template>

<!-- do not remove the <script /> markup -->

<script>
  
import BaseLayout from './components/BaseLayout.vue'
import HomePage from './pages/HomePage.vue'

export default {
  name: 'App',
  components: {
    BaseLayout,
    HomePage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 130px;
}
</style>
