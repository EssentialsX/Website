<template>
  <div class="overflow-x-hidden">
    <Navbar />

    <KitHero>
      <div class="flex flex-wrap items-center justify-between gap-4">
        <p class="flex-grow font-semibold text-3xl">Documentation</p>
        <DocsHeroSearch search-root="docs/2.x" />
      </div>
    </KitHero>

    <section
      class="main-content dark:bg-gray-900 dark:text-white transition motion-reduce:transition-none pb-12"
    >
      <nuxt />
    </section>

    <Footer />
  </div>
</template>
