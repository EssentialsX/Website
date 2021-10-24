<template>
  <div>
    <Hero>
      <p class="font-semibold text-3xl">Download EssentialsX</p>
      <p class="font-medium text-xl">
        Get stable series of EssentialsX and add-ons, or dev builds with the
        latest features and bug fixes.
      </p>
    </Hero>

    <section class="section">
      <div class="container">
        <b-notification type="is-info">
          <p>
            EssentialsX is developed by volunteers in our free time. If you'd
            like to support the development of EssentialsX, please consider
            supporting us on
            <a href="https://www.patreon.com/essentialsx" target="_blank"
              >Patreon</a
            >,
            <a href="https://github.com/sponsors/EssentialsX/" target="_blank"
              >GitHub Sponsors</a
            >
            or
            <a href="https://ko-fi.com/essentialsx" target="_blank">Ko-fi</a>.
          </p>
        </b-notification>

        <div class="level">
          <div class="level-left">
            <div class="buttons has-addons">
              <b-button
                label="Stable release"
                :type="branch === 'stable' ? 'is-primary' : null"
                @click="setBranch('stable')"
              />
              <b-button
                label="Development build"
                :type="branch === 'dev' ? 'is-primary' : null"
                @click="setBranch('dev')"
              />
            </div>
          </div>
          <div class="level-right">
            <div class="buttons has-addons">
              <b-button
                label="Single files"
                :type="mode === 'single' ? 'is-primary' : null"
                @click="setMode('single')"
              />
              <b-button
                label="Zip (coming soon)"
                :type="mode === 'zip' ? 'is-primary' : null"
                disabled
                @click="setMode('zip')"
              />
            </div>
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
  layout: 'no-container',
  asyncData({ params }) {
    return {
      series: series.includes(params.series) ? params.series : null,
      branch: params.branch,
    }
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
