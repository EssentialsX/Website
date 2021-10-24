<template>
  <component :is="tag" v-bind="$attrs" class="p-2 hover:bg-gray-700 rounded">
    <slot />
  </component>
</template>

<script lang="ts">
import 'vue-class-component/hooks'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({})
export default class NavbarItem extends Vue {
  @Prop({ default: 'span' }) readonly tag!: string
}
</script>
