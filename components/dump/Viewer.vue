<template>
  <section>
    <KitLoader v-if="status == 'loading'" size="xl" />
    <DumpViewerContents v-else-if="status == 'ready'" :dump="dumpData" />
    <KitCard v-else title="Failed to load dump">
      <p>
        The requested dump failed to load.
        <span v-if="error">({{ error }})</span>
      </p>
    </KitCard>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { DumpState } from '@/store/dump'

@Component
export default class DumpViewer extends Vue {
  get dumpState(): DumpState {
    return this.$store.state.dump as DumpState
  }

  get status() {
    return this.dumpState.status
  }

  get error() {
    return this.dumpState.error
  }

  get dumpData() {
    return this.dumpState.dump
  }
}
</script>
