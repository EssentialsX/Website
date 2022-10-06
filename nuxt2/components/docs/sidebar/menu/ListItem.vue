<template>
  <div class="my-1 inline-block">
    <nuxt-link v-if="link" :to="link" :class="linkClass">
      {{ label }}
    </nuxt-link>
    <a v-else-if="href" :href="href" target="_blank" :class="linkClass">
      <span class="mr-2">{{ label }}</span>
      <fa-icon icon="external-link-alt" class="text-xs" />
    </a>
    <DocsSidebarMenuList v-if="children" :entries="children" :nest="true" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  props: {
    label: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      required: false,
    },
    link: {
      type: String,
      required: false,
    },
    children: {
      type: Array,
      required: false,
    },
  },
})
export default class DocsSidebarMenuListItem extends Vue {
  get linkClass() {
    return {
      'font-semibold': this.$route.path.includes(this.$props.link),
      'hover:underline': true,
    }
  }
}
</script>
