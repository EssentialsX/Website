<template>
  <div>
    <div class="container mx-auto px-4 py-2">
      <div class="prose">
        <p>
          EssentialsX has web tools that you can launch from in-game and access
          in your browser.
        </p>
        <ul>
          <li>
            <nuxt-link to="/tools/dump"><b>/ess dump</b> viewer</nuxt-link>:
            View server data in your browser and share info for support
            purposes.
          </li>
          <!--
          <li class="text-strikethrough">
            <nuxt-link to="/tools/locale"
              ><b>messages.properties</b> viewer</nuxt-link
            >: Download the latest translation files for EssentialsX.
          </li>
          <li class="text-strikethrough">
            <nuxt-link to="/tools/config">Config editor</nuxt-link>: Edit your
            EssentialsX configuration in the browser.
          </li>
          -->
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  layout: 'tool',
  meta: {
    title: 'Tools',
  },
})
export default class ToolsIndexPage extends Vue {}
</script>
