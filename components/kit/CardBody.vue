<template>
  <div class="flex flex-col justify-between items-stretch h-full">
    <div class="flex-grow">
      <slot />
    </div>
    <div class="flex-grow-0 flex-shrink-0">
      <slot name="footer" />
    </div>
  </div>
</template>
