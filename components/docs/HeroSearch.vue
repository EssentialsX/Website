<template>
  <div class="flex max-w-lg flex-auto pr-4">
    <AutoComplete
      v-model="query"
      :suggestions="results"
      placeholder="Search docs..."
      icon="search"
      @selected="
        (option) => $router.push(`/${$props.searchRoot}/${option.slug}`)
      "
    >
      <template slot-scope="props">
        <div>
          <span class="font-semibold">
            {{ props.element.title || props.element.slug }}
          </span>
          <span>{{ props.element.excerpt }}</span>
        </div>
      </template>
    </AutoComplete>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    searchRoot: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      query: '',
      results: [],
      loading: false,
    }
  },
  watch: {
    async query(query: string) {
      this.$data.results = await this.$content(this.$props.searchRoot)
        .only(['title', 'slug', 'excerpt'])
        .sortBy('title', 'asc')
        .limit(10)
        .search(query)
        .fetch()
    },
  },
})
</script>
