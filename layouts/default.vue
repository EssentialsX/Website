<template>
  <div class="overflow-x-hidden !motion-reduce:transition-none">
    <Navbar />

    <section
      class="main-content transition-colors ease-linear min-h-[80vh]"
    >
      <slot />
    </section>

    <Footer />
  </div>
</template>
