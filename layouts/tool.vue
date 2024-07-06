<template>
  <div class="overflow-x-hidden !motion-reduce:transition-none">
    <NavMini />

    <section
      class="main-content transition-colors ease-linear dark:bg-gray-800 dark:text-white min-h-[calc(100vh_-_80px)]"
    >
      <KitContainer>
        <slot />
      </KitContainer>
    </section>

    <FooterMini />
  </div>
</template>
