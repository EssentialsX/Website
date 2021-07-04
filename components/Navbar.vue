<template>
  <b-navbar id="main-navbar" type="is-primary" spaced wrapper-class="container">
    <template #brand>
      <b-navbar-item tag="nuxt-link" :to="{ path: '/' }">
        <img src="@/assets/images/logo-navbar.png" />
      </b-navbar-item>
    </template>
    <template #end>
      <b-navbar-item tag="nuxt-link" to="/downloads">Download</b-navbar-item>
      <b-navbar-item tag="nuxt-link" to="/docs/2.x/Home">
        Documentation
      </b-navbar-item>
      <b-navbar-item tag="nuxt-link" to="/misc/get-help">Get help</b-navbar-item>
      <b-navbar-item tag="nuxt-link" to="/misc/support-us">Support us</b-navbar-item>
      <b-navbar-item tag="a" @click="toggleTheme">
        <b-icon :icon="themeIcon" />
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      theme: 'light',
    }
  },
  computed: {
    themeIcon() {
      return this.$data.theme === 'light' ? 'weather-sunny' : 'weather-night'
    },
  },
  mounted() {
    this.$data.theme = this.$theme()
  },
  methods: {
    toggleTheme() {
      this.$data.theme = this.$data.theme === 'light' ? 'dark' : 'light'
      this.$theme(this.$data.theme)
    },
  },
})
</script>
