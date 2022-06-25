<template>
  <div class="w-full max-w-60">
    <div class="bg-sign text-black aspect-9/16">
      <div
        class="flex flex-col justify-around p-1 font-mono text-xl text-center font-semibold"
      >
        <p :class="lineClass(1)">{{ lineText(1) }}</p>
        <p :class="lineClass(2)">{{ lineText(2) }}</p>
        <p :class="lineClass(3)">{{ lineText(3) }}</p>
        <p :class="lineClass(4)">{{ lineText(4) }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

type SignLineExtra = {
  text: string
  highlight: 'valid' | 'invalid' | null | undefined
}

type SignLine = string | SignLineExtra

@Component
export default class DocsSign extends Vue {
  @Prop({ default: { text: '[Sign]', highlight: true } }) line1!: SignLine
  @Prop({ default: 'mdcfe' }) line2!: SignLine
  @Prop({ default: 'hmm' }) line3!: SignLine
  @Prop({ default: 'hmmmmmmmmmmmmmmmmm' }) line4!: SignLine

  getLine(lineNumber: 1 | 2 | 3 | 4) {
    switch (lineNumber) {
      case 1:
        return this.line1
      case 2:
        return this.line2
      case 3:
        return this.line3
      case 4:
        return this.line4
    }
  }

  lineClass(lineNumber: 1 | 2 | 3 | 4) {
    const line = this.getLine(lineNumber)

    return {
      '!my-0.5': true,
      'text-shadow-sm': true,
      'text-blue-700': (line as SignLineExtra)?.highlight === 'valid' || false,
      'text-red-600': (line as SignLineExtra)?.highlight === 'invalid' || false,
    }
  }

  lineText(lineNumber: 1 | 2 | 3 | 4) {
    const line = this.getLine(lineNumber)

    return (line as SignLineExtra)?.text || (line as string)
  }
}
</script>
