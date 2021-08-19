<template>
  <div>
    <div class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">EssentialsX Server Dump</h1>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <ClientOnly>
          <Dump />
        </ClientOnly>
      </div>
    </div>
  </div>
</template>

<script>
import Dump from "../components/Dump";

export const attributes = {
  title: "Server Dump"
};

export default {
  components: {
    Dump
  }
};
</script>
