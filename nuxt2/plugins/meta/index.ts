import Component from 'vue-class-component'
import { MetaInfo } from 'vue-meta'

declare module 'vue/types/vue' {
  // this.$theme inside Vue components
  interface Vue {
    getHead(): MetaInfo
  }
}

Component.registerHooks(['head'])
