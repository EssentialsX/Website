<template>
  <div class="flex max-w-128 flex-auto">
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
          <b>{{ props.element.title || props.element.slug }}</b>
          <span>{{ props.element.excerpt }}</span>
        </div>
      </template>
    </AutoComplete>
    <!-- <input
      v-model="query"
      type="search"
      class="focus:ring rounded h-full w-20 text-lg"
      placeholder="Search docs"
      icon="magnify"
      :data="results"
      :loading="loading"
      @select="(option) => $router.push(`/${$props.searchRoot}/${option.slug}`)"
    /> -->
    <!-- <template slot-scope="props">
      <div class="media">
        <div class="media-content">
          <b>{{ props.option.title || props.option.slug }}</b>
          <span>{{ props.option.excerpt }}</span>
        </div>
      </div>
    </template> -->
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
