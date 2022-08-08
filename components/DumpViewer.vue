<template>
  <section>
    <client-only>
      <DumpViewerContents />

      <div
        slot="placeholder"
        class="w-full py-10 flex flex-col items-center justify-around"
      >
        <KitLoader size="xl" />
      </div>
    </client-only>
  </section>
</template>
