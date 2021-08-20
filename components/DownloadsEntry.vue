<template>
  <div class="media">
    <div class="media-left">
      <b-icon :icon="moduleData.icon" size="is-large"></b-icon>
    </div>
    <div class="media-content">
      <div class="content">
        <div class="columns">
          <div class="column is-narrow">
            <p class="title is-5">
              {{ moduleData.name }}
            </p>
            <p class="subtitle is-6">{{ version.name }}</p>
          </div>
          <div class="column">
            <span class="tags">
              <b-tag
                v-for="tag in moduleData.tags"
                :key="`${moduleData.name}--tag-${tag.text}`"
                :type="'is-' + tag.color"
                class="has-text-weight-bold"
              >
                {{ tag.text }}
              </b-tag>
            </span>
          </div>
        </div>
        <p>
          {{ moduleData.description }}
        </p>
      </div>
    </div>
    <div class="media-right">
      <div class="buttons">
        <b-button
          v-if="moduleData.docsUrl && moduleData.docsUrl.href"
          tag="a"
          type="is-info"
          icon-right="open-in-new"
          :href="moduleData.docsUrl.href"
          target="_blank"
        >
          Info
        </b-button>
        <b-button
          v-if="moduleData.docsUrl && moduleData.docsUrl.link"
          tag="nuxt-link"
          type="is-info"
          :to="moduleData.docsUrl.link"
        >
          Docs
        </b-button>
        <b-button tag="a" type="is-primary" :href="moduleData.downloadUrl">
          Download
        </b-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { DownloadsState, ModuleId } from '@/store/downloads'

@Component
export default class DownloadsEntry extends Vue {
  @Prop() readonly module!: ModuleId

  get downloadState() {
    return this.$store.state.downloads as DownloadsState
  }

  get version() {
    return this.downloadState.version
  }

  get moduleData() {
    return this.downloadState.artifacts[this.module]
  }
}
</script>
