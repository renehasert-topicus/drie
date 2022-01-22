<script setup lang="ts">
import Main from './components/Main.vue';</script>

<template>
  <Main msg="Hello"/>
</template>

<style scoped>
html, body {
  margin: 0;
  padding: 0;
}
body {
  position: fixed;
  top: 0;
  left: 0;
}

#app {
  margin: 0;
  position: absolute;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
</style>
