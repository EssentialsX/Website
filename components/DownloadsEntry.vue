<template>
  <div class="flex flex-col gap-6 lg:flex-row justify-between align-top">
    <div>
      <!-- <fa-icon :icon="moduleData.icon"></fa-icon> -->
      <p class="text-xl font-semibold">{{ moduleData.name }}</p>
      <p class="text-md font-semibold">{{ version.name }}</p>
      <p>{{ moduleData.description }}</p>
      <p class="mt-2">
        <span class="hidden bg-gray-500"></span>
        <span class="hidden bg-red-600"></span>
        <span class="hidden bg-blue-600"></span>
        <span class="hidden bg-green-600"></span>
        <span class="hidden bg-yellow-600"></span>
        <KitTags>
          <KitTag
            v-for="tag in moduleData.tags"
            :key="`${moduleData.name}--tag-${tag.text}`"
            :bg-color="tag.color"
          >
            {{ tag.text }}
          </KitTag>
        </KitTags>
      </p>
    </div>
    <!-- Buttons -->
    <div>
      <KitButtons>
        <KitButton
          v-if="moduleData.docsUrl && moduleData.docsUrl.href"
          tag="a"
          bg-color="bg-blue-600"
          target="_blank"
          :href="moduleData.docsUrl.href"
        >
          Learn more...
        </KitButton>
        <KitButton
          v-if="moduleData.docsUrl && moduleData.docsUrl.link"
          tag="nuxt-link"
          bg-color="bg-blue-600"
          :to="moduleData.docsUrl.link"
        >
          Docs
        </KitButton>
        <KitButton
          v-if="moduleData.downloadUrl"
          tag="a"
          bg-color="bg-red-600"
          :href="moduleData.downloadUrl"
        >
          Download
        </KitButton>
      </KitButtons>
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
