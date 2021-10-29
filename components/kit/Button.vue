<template>
  <component :is="tag" v-bind="$attrs" :class="buttonClass">
    <fa-icon v-if="iconLeft" :icon="iconLeft" class="mr-1" />
    <span v-if="label">{{ label }}</span>
    <slot v-else></slot>
    <fa-icon v-if="iconRight" :icon="iconRight" class="ml-1" />
  </component>
</template>

<script lang="ts">
// TODO kit demo page
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class KitButton extends Vue {
  @Prop({ default: 'a' }) tag!: string
  @Prop({ default: 'red-500' }) bgColor!: string
  @Prop({ default: 'white' }) textColor!: string
  @Prop({ default: false }) inverted!: boolean
  @Prop({ default: true }) rounded!: boolean
  @Prop() iconLeft?: string
  @Prop() iconRight?: string
  @Prop() label?: string

  get buttonClass() {
    return {
      'px-3': true,
      'py-2': true,
      'bg-transparent': !!this.inverted,
      [this.bgColor]: !this.inverted,
      [`text-${this.textColor}`]: true,
      'rounded-md': this.rounded, // eslint-disable-line prettier/prettier
      'border': !!this.inverted, // eslint-disable-line prettier/prettier
      'border-white': true,
      'hover:ring': true,
    }
  }
}
</script>
