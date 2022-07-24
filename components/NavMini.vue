<template>
  <div>
    <div class="w-screen py-2 bg-gray-900 text-white">
      <div class="flex gap-2 items-center container mx-auto h-full px-4">
        <NuxtLink to="/">
          <img
            class="h-4"
            alt="EssentialsX logo"
            src="@/assets/images/logo-navbar.png"
          />
        </NuxtLink>
        <span class="font-semibold">{{ pageTitle }}</span>
        <span class="flex-grow"></span>
        <span class="items-center">
          <a
            class="p-2 hover:bg-gray-700 rounded transition-colors"
            @click="toggleTheme"
          >
            <fa-icon :icon="themeIcon" />
          </a>
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { RoutingState } from '@/store/routing'

@Component
export default class NavMini extends Vue {
  theme: string = 'light'

  mounted() {
    this.$data.theme = this.$theme()
  }

  get themeIcon() {
    return this.theme === 'light' ? 'sun' : 'moon'
  }

  get routingState() {
    return this.$store.state.routing as RoutingState
  }

  get pageTitle() {
    return this.routingState.pageTitle
  }

  toggleTheme() {
    this.$data.theme = this.$data.theme === 'light' ? 'dark' : 'light'
    this.$theme(this.$data.theme)
  }
}
</script>
