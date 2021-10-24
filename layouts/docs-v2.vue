<template>
  <div>
    <Navbar />

    <Hero>
      <div class="flex flex-wrap items-center justify-between gap-4">
        <p class="flex-grow font-semibold text-3xl">Documentation</p>
        <DocsHeroSearch search-root="docs/2.x" />
      </div>
    </Hero>

    <section class="main-content">
      <nuxt />
    </section>

    <Footer />
  </div>
</template>
