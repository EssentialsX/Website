<template>
  <div>
    <b-autocomplete
      v-model="query"
      icon="magnify"
      :data="results"
      placeholder="Search docs"
      :loading="loading"
      @select="(option) => $router.push(`/${$props.searchRoot}/${option.slug}`)"
    >
      <template slot-scope="props">
        <div class="media">
          <div class="media-content">
            <b>{{ props.option.title || props.option.slug }}</b>
            <span>{{ props.option.excerpt }}</span>
          </div>
        </div>
      </template>
    </b-autocomplete>
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
        .limit(5)
        .search(query)
        .fetch()
    },
  },
})
</script>
