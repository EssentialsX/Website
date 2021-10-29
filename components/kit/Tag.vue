<template>
  <span :class="tagClass">
    <fa-icon v-if="iconLeft" :icon="iconLeft" class="mr-1" />
    <span v-if="label">{{ label }}</span>
    <slot v-else></slot>
    <fa-icon v-if="iconRight" :icon="iconRight" class="ml-1" />
  </span>
</template>

<script lang="ts">
// TODO kit demo page
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class KitTags extends Vue {
  @Prop({ default: 'bg-red-600' }) bgColor!: string
  @Prop({ default: 'text-white' }) textColor!: string
  @Prop({ default: 'text-xs' }) textSize!: string
  @Prop({ default: true }) rounded!: boolean
  @Prop() iconLeft?: string
  @Prop() iconRight?: string
  @Prop() label?: string

  get tagClass() {
    return {
      'px-2': true,
      'py-1': true,
      [this.bgColor]: true,
      [this.textColor]: true,
      [this.textSize]: true,
      'rounded-full': this.rounded, // eslint-disable-line prettier/prettier
    }
  }
}
</script>
