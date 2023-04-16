<script setup lang="ts">
import CommandList from '../components/CommandList.vue'
</script>

<template>
    <div class="commands-page">
        <h1>Command list</h1>

        <CommandList />
    </div>
</template>
  
<style>
  @media (min-width: 1024px) {
    .commands-page {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
</style>
  