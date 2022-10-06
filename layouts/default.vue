<template>
  <div class="overflow-x-hidden !motion-reduce:transition-none">
    <Navbar />

    <section
      class="main-content transition-colors ease-linear dark:bg-gray-900 dark:text-white min-h-[80vh]"
    >
      <slot />
    </section>

    <Footer />
  </div>
</template>
