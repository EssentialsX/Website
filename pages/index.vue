<template>
  <NuxtLayout>
    <KitHero pattern="jigsaw">
      <div class="flex flex-col items-center gap-2 mx-auto my-8">
        <p class="font-semibold text-3xl">It's in the name.</p>
        <p class="font-medium text-md">
          EssentialsX is the essential plugin suite for Minecraft servers, with
          over 130 commands for servers of all size and scale.
        </p>
        <KitButtons class="mt-4 md:mt-8">
          <KitButton
            tag="nuxt-link"
            to="/downloads"
            bg-color="bg-white"
            text-color="text-black"
            icon-left="fa6-solid:arrow-right"
            label="Get started"
          />
          <KitButton
            tag="nuxt-link"
            to="/downloads"
            :inverted="true"
            icon-left="fa6-solid:arrow-down"
            label="Downloads"
          />
        </KitButtons>
      </div>
    </KitHero>

    <section
      class="flex flex-col md:flex-row items-stretch gap-4 container mx-auto px-6 py-10"
    >
      <div class="flex-basis-1">
        <KitCard
          class="h-full"
          image-src="/images/home/commands.png"
          :image-zoom="true"
        >
          <KitCardBody>
            <p class="text-lg font-semibold">
              130+ commands at your fingertips
            </p>
            <p>
              EssentialsX adds countless essential features to your server,
              including homes, warps, kits and more!
            </p>
            <template #footer>
              <KitButtons class="mt-4 md:mt-8">
                <!-- TODO: integrated commands and perms page -->
                <KitButton
                  tag="nuxt-link"
                  to="/docs/2.x/Home"
                  bg-color="bg-red-600"
                  text-color="text-white"
                  icon-right="fa6-solid:arrow-right"
                  label="Docs"
                />
                <KitButton
                  tag="a"
                  href="https://essinfo.xeya.me/commands.html"
                  bg-color="bg-red-600"
                  text-color="text-white"
                  icon-right="fa6-solid:arrow-right"
                  label="Commands list"
                />
              </KitButtons>
            </template>
          </KitCardBody>
        </KitCard>
      </div>
      <div class="flex-basis-1">
        <KitCard
          class="h-full"
          image-src="/images/home/discord.png"
          :image-zoom="true"
        >
          <KitCardBody>
            <p class="text-lg font-semibold">NEW: EssentialsX Discord</p>
            <p>
              Link your Minecraft server's chat to Discord for with our brand
              new addon!
            </p>
            <template #footer>
              <KitButtons class="mt-4 md:mt-8">
                <KitButton
                  tag="nuxt-link"
                  to="/docs/2.x/Module-Discord"
                  bg-color="bg-red-600"
                  text-color="text-white"
                  icon-right="fa6-solid:arrow-right"
                  label="Learn more"
                />
              </KitButtons>
            </template>
          </KitCardBody>
        </KitCard>
      </div>
      <div class="flex-basis-1">
        <KitCard
          class="h-full"
          image-src="/images/home/community.png"
          :image-zoom="true"
        >
          <KitCardBody>
            <p class="text-lg font-semibold">Join our community</p>
            <p>
              EssentialsX is open source, with community-powered support through
              MOSS.
            </p>
            <template #footer>
              <KitButtons class="mt-4 md:mt-8">
                <KitButton
                  tag="nuxt-link"
                  to="/misc/get-help"
                  bg-color="bg-red-600"
                  text-color="text-white"
                  icon-right="fa6-solid:arrow-right"
                  label="Get help"
                />
                <KitButton
                  tag="nuxt-link"
                  to="/misc/support-us"
                  bg-color="bg-red-600"
                  text-color="text-white"
                  icon-right="fa6-solid:arrow-right"
                  label="Support the project"
                />
              </KitButtons>
            </template>
          </KitCardBody>
        </KitCard>
      </div>
    </section>
    <section class="hidden lg:block py-10">
      <!-- Spacer -->
    </section>
  </NuxtLayout>
</template>
