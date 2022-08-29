<template>
  <span v-if="false" />
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

@Component({
  head() {
    return this.getHead()
  },
})
export default class KitMeta extends Vue {
  @Prop({ required: true }) title!: string
  @Prop({ required: true }) description!: string
  @Prop({ default: undefined }) image!: string | undefined

  get imageUrl() {
    return this.image || this.$config.baseUrl + '/images/social.png'
  }

  getHead() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.description,
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.imageUrl,
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: this.title,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.title,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.description,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.imageUrl,
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: this.imageUrl,
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: this.title,
        },
      ],
    }
  }
}
</script>
