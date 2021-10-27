<template>
  <div
    class="border dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 dark:text-white drop-shadow-sm"
  >
    <section v-if="imageSrc" class="overflow-hidden rounded-t-md">
      <div :class="imageClass">
        <nuxt-picture
          :src="imageSrc"
          :width="imageWidth"
          :height="imageHeight"
          :fit="imageFit"
        />
      </div>
    </section>
    <section class="m-4">
      <slot>
        <div>
          <p class="text-lg font-semibold">Card title</p>
          <p>Hello world! This is a card.</p>
        </div>
      </slot>
    </section>
  </div>
</template>

<script lang="ts">
// TODO kit demo page
import 'vue-class-component/hooks'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class KitCard extends Vue {
  @Prop() imageSrc?: string
  @Prop({ default: '800' }) imageWidth!: string
  @Prop({ default: '600' }) imageHeight!: string
  @Prop({ default: 'cover' }) imageFit!: string
  @Prop({ default: false }) imageZoom!: boolean

  get imageClass() {
    return {
      'hover:scale-105': this.imageZoom,
      'transition-transform': true,
    }
  }
}
</script>
