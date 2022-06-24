<template>
  <div style="border-top-color: transparent" :class="spinnerClass"></div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class KitLoader extends Vue {
  @Prop({ default: 'default' }) color!: string
  @Prop({ default: 'md' }) size!: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

  get spinnerClass() {
    const color = {
      'border-dark-500': this.color === 'default',
      'dark:border-white': this.color === 'default',
      [this.color]: this.color && this.color !== 'default',
    }

    const size = (() => {
      switch (this.size) {
        case 'xs':
          return {
            'w-4': true,
            'h-4': true,
            'border-3': true,
          }
        case 'sm':
          return {
            'w-6': true,
            'h-6': true,
            'border-3': true,
          }

        case 'md':
          return {
            'w-10': true,
            'h-10': true,
            'border-4': true,
          }
        case 'lg':
          return {
            'w-16': true,
            'h-16': true,
            'border-4': true,
          }
        case 'xl':
          return {
            'w-24': true,
            'h-24': true,
            'border-5': true,
          }
        case '2xl':
          return {
            'w-32': true,
            'h-32': true,
            'border-5': true,
          }
      }
    })()

    return {
      'border-solid': true,
      'rounded-full': true,
      'animate-spin': true,
      ...color,
      ...size,
    }
  }
}
</script>
