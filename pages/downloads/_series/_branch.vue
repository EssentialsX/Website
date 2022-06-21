<template>
  <div>
    <KitHero>
      <p class="font-semibold text-3xl">Download EssentialsX</p>
      <p class="font-medium text-xl">
        Get stable releases of EssentialsX and add-ons, or dev builds with the
        latest features and bug fixes.
      </p>
    </KitHero>

    <section class="container mx-auto p-6">
      <div>
        <div
          class="p-4 border bg-blue-100 border-blue-200 dark:bg-blue-900 dark:border-blue-800 rounded-md"
        >
          <p>
            EssentialsX is developed by volunteers in our free time. If you
            appreciate our work and want to give back, please consider
            <nuxt-link class="underline" to="/misc/support-us"
              >supporting the EssentialsX project</nuxt-link
            >.
          </p>
        </div>

        <div class="my-6 flex flex-row justify-between">
          <div>
            <span class="hidden bg-red-600"></span>
            <span class="hidden bg-red-200"></span>
            <KitButtons>
              <KitButton
                v-if="branch !== 'stable'"
                label="Show stable releases"
                tag="nuxt-link"
                bg-color="bg-red-600"
                :to="`/downloads/${series}/stable`"
              />
              <KitButton
                v-if="branch !== 'dev'"
                label="Show dev builds"
                tag="nuxt-link"
                bg-color="bg-red-600"
                :to="`/downloads/${series}/dev`"
              />
            </KitButtons>
          </div>
          <div>
            <!-- Zip/individual toggle (not implemented) -->
            <KitButtons v-if="series && branch && false">
              <KitButton
                v-if="mode !== 'single'"
                label="Download individual files"
                bg-color="bg-red-600"
                @click="setMode('single')"
              />
              <KitButton
                v-if="mode !== 'zip'"
                label="Create a zip (coming soon)"
                bg-color="bg-red-200"
                tag="button"
                disabled
              />
            </KitButtons>
          </div>
        </div>

        <Downloads v-if="series && branch" :series="series" :branch="branch" />
        <p v-else class="block">Select a branch to view downloads.</p>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Branch } from '@/store/downloads'

const series = ['2.x']
type Mode = 'single' | 'zip'

@Component({
  asyncData({ params }) {
    return {
      series: series.includes(params.series) ? params.series : null,
      branch: params.branch,
    }
  },
  transition(to, from) {
    if (from?.path.includes('/downloads') && to?.path.includes('/downloads')) {
      return 'none'
    }
    return 'page'
  },
  watch: {
    series(this: DownloadsPage) {
      this.reload()
    },
    branch(this: DownloadsPage) {
      this.reload()
    },
  },
})
export default class DownloadsPage extends Vue {
  series: string | null = null
  branch: Branch | null = null
  mode: Mode = 'single'

  mounted() {
    if (!this.series) {
      this.$router.replace('/downloads/2.x')
    }
  }

  reload() {
    if (this.series && this.branch) {
      this.$router.push(`/downloads/${this.series}/${this.branch}`)
    }
  }

  setBranch(branch: Branch) {
    this.branch = branch
  }
}
</script>
