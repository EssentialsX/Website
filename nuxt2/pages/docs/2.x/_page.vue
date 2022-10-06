<template>
  <div>
    <nav class="mb-4">
      <ul>
        <li class="inline-block"><nuxt-link to="/docs">Docs</nuxt-link></li>
        <li class="inline-block mx-2">/</li>
        <li class="inline-block">
          <nuxt-link to="/docs/2.x/Home">2.x</nuxt-link>
        </li>
        <li class="inline-block mx-2">/</li>
        <li class="inline-block font-semibold">
          <a>{{ title }}</a>
        </li>
      </ul>
    </nav>
    <hr class="mb-4 dark:border-gray-800" />
    <KitCard v-if="page.wip" class="mb-4">
      <p>
        This article is a <b>work-in-progress</b> and may be incomplete. You can
        help us out by
        <a class="underline" href="https://github.com/EssentialsX/Wiki">
          contributing to the docs on GitHub.
        </a>
      </p>
      <p>
        If this article doesn't answer your questions, you can
        <nuxt-link class="underline" to="/misc/get-help">
          ask for community support with EssentialsX
        </nuxt-link>.
      </p>
    </KitCard>
    <KitCard v-if="page.fullscreen" class="lg:hidden mb-4">
      This article is best viewed <b>maximized on a large screen</b>.
    </KitCard>
    <div class="prose !max-w-full">
      <nuxt-content :document="page" />
    </div>
    <KitMeta :title="title" :description="page.excerpt" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ $content, params }) {
    const page = await $content(`docs/2.x/${params.page}`).fetch()

    return {
      page,
    }
  },
  computed: {
    title(): String {
      const pageTitle: string =
        this.$data.page.title || this.$data.page.slug || 'hello'
      return pageTitle.replace('-', ' ')
    },
  },
})
</script>
