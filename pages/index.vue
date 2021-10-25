<template>
  <div>
    <KitHero>
      <div class="flex flex-col items-center gap-2 mx-auto">
        <p class="font-semibold text-3xl">It's in the name.</p>
        <p class="font-medium text-md">
          EssentialsX is the essential plugin suite for Minecraft servers, with
          over 130 commands for servers of all size and scale.
        </p>
        <KitButtons>
          <KitButton
            tag="nuxt-link"
            to="/downloads"
            bg-color="white"
            text-color="black"
            icon-left="arrow-right"
            label="Get started"
          />
          <KitButton
            tag="nuxt-link"
            to="/downloads"
            inverted
            icon-left="arrow-down"
            label="Downloads"
          />
        </KitButtons>
      </div>
    </KitHero>

    <section>
      <p>Stuff goes here</p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  layout: 'no-container',
}
</script>
