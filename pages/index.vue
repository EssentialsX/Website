<template>
  <div>
    <KitHero>
      <div class="flex flex-col items-center gap-2 mx-auto my-8">
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
            :inverted="true"
            icon-left="arrow-down"
            label="Downloads"
          />
        </KitButtons>
      </div>
    </KitHero>

    <section
      class="flex flex-col lg:flex-row justify-items-stretch gap-4 container mx-auto my-4 px-4"
    >
      <div class="flex-1">
        <KitCard image-src="/images/home/commands.png" :image-zoom="true">
          <p class="text-lg font-semibold">130+ commands at your fingertips</p>
          <p>
            EssentialsX adds countless essential features to your server,
            including homes, warps, kits and more!
          </p>
          <KitButtons>
            <!-- Add color -->
            <div class="hidden bg-red-600"></div>
            <!-- TODO: integrated commands and perms page -->
            <KitButton
              tag="nuxt-link"
              to="/docs/2.x/Home"
              bg-color="red-600"
              text-color="white"
              icon-right="arrow-right"
              label="Docs"
            />
            <KitButton
              tag="a"
              href="https://essinfo.xeya.me/commands.html"
              bg-color="red-600"
              text-color="white"
              icon-right="arrow-right"
              label="Commands list"
            />
          </KitButtons>
        </KitCard>
      </div>
      <div class="flex-1">
        <KitCard image-src="/images/home/discord.png" :image-zoom="true">
          <p class="text-lg font-semibold">NEW: EssentialsX Discord</p>
          <p>
            Link your Minecraft server's chat to Discord for with our brand new
            addon!
          </p>
          <KitButtons>
            <KitButton
              tag="nuxt-link"
              to="/docs/2.x/Discord-Tutorial"
              bg-color="red-600"
              text-color="white"
              icon-right="arrow-right"
              label="Learn more"
            />
          </KitButtons>
        </KitCard>
      </div>
      <div class="flex-1">
        <KitCard image-src="/images/home/community.png" :image-zoom="true">
          <p class="text-lg font-semibold">Join our community</p>
          <p>
            EssentialsX is open source and part of the MOSS community. Get help
            with EssentialsX and show your support for the project below!
          </p>
          <KitButtons>
            <KitButton
              tag="nuxt-link"
              to="/misc/get-help"
              bg-color="red-600"
              text-color="white"
              icon-right="arrow-right"
              label="Get help"
            />
            <KitButton
              tag="nuxt-link"
              to="/misc/support-us"
              bg-color="red-600"
              text-color="white"
              icon-right="arrow-right"
              label="Support the project"
            />
          </KitButtons>
        </KitCard>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  layout: 'no-container',
}
</script>
