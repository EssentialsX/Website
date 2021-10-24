<template>
  <div
    v-click-outside="hideSuggestions"
    class="w-full relative"
    @click="showSuggestions"
  >
    <input
      v-model="syncValue"
      type="text"
      :class="inputClass"
      :placeholder="placeholder"
    />
    <fa-icon
      v-if="icon"
      class="absolute top-3.5 left-3.5 text-gray-600 focus:text-black"
      :icon="icon"
    />
    <div
      v-if="suggestionsVisible"
      class="absolute z-10 flex flex-col items-start w-full right-0 bg-white text-black dark:text-gray-300 dark:focus:text-white dark:bg-gray-900 border dark:border-gray-800 rounded-md shadow-md mt-1"
    >
      <a
        v-for="(element, index) in suggestions"
        :key="`suggestion_${index}`"
        class="w-full px-4 py-3 hover:bg-gray-300 cursor-pointer"
        @click.prevent="$emit('selected', element)"
      >
        <slot :element="element"> Suggestion {{ index }} </slot>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import 'vue-class-component/hooks'
import { Component, ModelSync, Prop, Vue, Watch } from 'vue-property-decorator'
import ClickOutside from 'vue-click-outside'

@Component({
  directives: {
    ClickOutside,
  },
})
export default class AutoComplete extends Vue {
  @ModelSync('value', 'change', { default: '' }) syncValue!: string
  @Prop() icon?: string
  @Prop() placeholder?: string
  @Prop() suggestions?: any[]

  suggestionsVisible = false

  showSuggestions() {
    if (this.suggestions && this.suggestions.length > 0) {
      this.suggestionsVisible = true
    } else {
      this.suggestionsVisible = false
    }
  }

  hideSuggestions() {
    this.suggestionsVisible = false
  }

  @Watch('syncValue')
  watchValue(newValue: string) {
    if (newValue) {
      this.showSuggestions()
    }
  }

  get inputClass() {
    return {
      'pl-10': this.icon,
      'h-full': true,
      'w-full': true,
      'rounded': true,
      'text-gray-600': true,
      'focus:text-black': true,
      'focus:ring': true,
      'dark:text-gray-300': true,
      'dark:focus:text-white': true,
      'dark:bg-gray-900': true,
    }
  }
}
</script>
