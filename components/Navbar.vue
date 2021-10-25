<template>
  <div>
    <div class="w-screen py-4 bg-gray-900 text-white">
      <div class="flex items-center container mx-auto h-full px-4">
        <NuxtLink to="/">
          <img class="h-6" src="@/assets/images/logo-navbar.png" />
        </NuxtLink>
        <span class="flex-grow"></span>
        <span class="hidden md:inline items-center">
          <NavbarItem tag="NuxtLink" to="/downloads">Downloads</NavbarItem>
          <NavbarItem tag="NuxtLink" to="/docs">Docs</NavbarItem>
          <NavbarItem tag="NuxtLink" to="/misc/get-help">Get help</NavbarItem>
          <!-- eslint-disable-next-line prettier/prettier -->
          <NavbarItem tag="NuxtLink" to="/misc/support-us">Support us</NavbarItem>
          <a class="p-2 hover:bg-gray-700 rounded" @click="toggleTheme">
            <fa-icon :icon="themeIcon" />
          </a>
        </span>
        <span class="md:hidden px-2">
          <a class="px-3 py-2 hover:bg-gray-700 rounded" @click="toggleTheme">
            <fa-icon :icon="themeIcon" />
          </a>
          <a
            class="px-3 py-2 ml-2 hover:bg-gray-700 rounded"
            @click="toggleMenu"
          >
            <fa-icon :icon="open ? 'caret-up' : 'bars'" />
          </a>
        </span>
      </div>
    </div>
    <div v-if="open" class="md:hidden flex flex-col p-2 bg-gray-800 text-white">
      <NavbarItem tag="NuxtLink" to="/downloads">Downloads</NavbarItem>
      <NavbarItem tag="NuxtLink" to="/docs">Docs</NavbarItem>
      <NavbarItem tag="NuxtLink" to="/misc/get-help">Get help</NavbarItem>
      <NavbarItem tag="NuxtLink" to="/misc/support-us">Support us</NavbarItem>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      theme: 'light',
      open: false,
    }
  },
  computed: {
    themeIcon() {
      return this.$data.theme === 'light' ? 'sun' : 'moon'
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
    toggleMenu() {
      this.open = !this.open
    },
  },
})
</script>
