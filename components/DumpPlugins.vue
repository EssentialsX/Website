<template>
  <div>
    <DumpPluginsEntry
      v-for="plugin in entries" :key="plugin.name"
      v-bind="plugin" />
  </div>
</template>

<script>
import DumpPluginsEntry from "./DumpPluginsEntry"

export default {
  components: {
    DumpPluginsEntry
  },
  props: {
    entries: {
      type: Array,
      required: true,
    }
  }
}
</script>