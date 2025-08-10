<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <p class="faded banner-text">Coming Soon</p>
  <span class="faded">Project Cloverfield - Mal'ganis</span>
  <main>
    <!-- <TheWelcome /> -->
  </main>
</template>

<style>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.banner-text {
    font-size: 14vw;
}

.faded {
position: absolute;
    text-align: center;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.5;
    text-shadow: 2px 3px 18px grey;
}

span.faded {
  padding-top: 20%;
  font-size: 2.5vw;
  opacity: 0.5;
  text-shadow: 2px 3px 18px grey;
}
</style>
