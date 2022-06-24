<template>
  <component :is="tag" v-bind="$attrs" :class="buttonClass">
    <span :class="$props.loading ? 'opacity-0' : ''">
      <fa-icon v-if="iconLeft" :icon="iconLeft" class="mr-1" />
      <span v-if="label">{{ label }}</span>
      <slot v-else></slot>
      <fa-icon v-if="iconRight" :icon="iconRight" class="ml-1" />
    </span>
    <div
      v-if="loading"
      class="absolute top-0 left-0 h-full w-full z-2 flex justify-center items-center"
    >
      <KitLoader size="xs" />
    </div>
  </component>
</template>

<script lang="ts">
// TODO kit demo page
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class KitButton extends Vue {
  @Prop({ default: 'a' }) tag!: string
  @Prop({ default: 'bg-red-500' }) bgColor!: string
  @Prop({ default: 'text-white' }) textColor!: string
  @Prop({ default: false }) inverted!: boolean
  @Prop({ default: false }) disabled!: boolean
  @Prop({ default: true }) rounded!: boolean
  @Prop() iconLeft?: string
  @Prop() iconRight?: string
  @Prop() label?: string
  @Prop({ default: false }) loading!: boolean

  get buttonClass() {
    return {
      'px-3': true,
      'py-2': true,
      relative: true,
      'bg-transparent': !!this.inverted,
      [this.bgColor]: !this.inverted,
      [this.textColor]: true,
      'rounded-md': this.rounded, // eslint-disable-line prettier/prettier
      'border': !!this.inverted, // eslint-disable-line prettier/prettier
      'border-white': true,
      'hover:ring': !this.disabled,
      'cursor-default': this.disabled,
      'cursor-pointer': !this.disabled,
    }
  }
}
</script>
