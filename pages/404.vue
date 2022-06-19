<template>
  <div>
    <KitHero
      class="h-80vh text-dark-900 from-slate-200 to-slate-400 dark:(text-white from-slate-800 to-slate-900)"
    >
      <div class="flex flex-col items-center gap-2 mx-auto my-8">
        <p class="text-6xl font-semibold">404</p>
        <p>
          You look lost.
          <nuxt-link class="underline" to="/">Return to homepage</nuxt-link>
        </p>
      </div>
    </KitHero>
  </div>
</template>
