<template>
  <div>
    <Navbar />

    <div class="hero is-primary is-small">
      <div class="hero-body">
        <div class="container">
          <div class="level">
            <div class="level-left">
              <p class="title">Documentation</p>
            </div>
            <div class="level-right">
              <DocsHeroSearch search-root="docs/2.x" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="main-content">
      <nuxt />
    </section>

    <Footer />
  </div>
</template>
