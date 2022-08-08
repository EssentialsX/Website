<template>
  <tr class="not-last:border-b border-gray-200 dark:border-gray-700">
    <td class="w-1/2 py-2 font-semibold">
      {{ title }}
    </td>
    <td class="w-1/2 py-1">
      <span v-if="value">{{ formattedValue }}</span>
      <span v-else class="opacity-20">-</span>
    </td>
  </tr>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

@Component
export default class DumpTableEntry extends Vue {
  @Prop() title!: string
  @Prop() value?: string | boolean | null

  get formattedValue() {
    switch (this.value) {
      case true:
      case 'true':
        return 'True'
      case false:
      case 'false':
        return 'False'
      default:
        return this.value
    }
  }
}
</script>
