<template>
  <div>
    <KitHero
      class="h-80vh text-dark-900 from-rose-100 to-rose-200 dark:(text-white from-rose-800 to-rose-900)"
      pattern="circuit-board"
      pattern-dark="circuit-board-light"
    >
      <div class="flex flex-col items-center gap-2 mx-auto my-8">
        <p class="text-6xl font-semibold">{{ error.statusCode }}</p>
        <p>
          You look lost.
          <nuxt-link class="underline" to="/">Return to homepage</nuxt-link>
        </p>
      </div>
    </KitHero>
  </div>
</template>
