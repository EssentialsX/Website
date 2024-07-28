<template>
  <div class="mx-auto w-full my-8 flex justify-center">
    <div class="card card-bordered">
      <div class="card-body">
        <h2 class="card-title pb-2">Enter your Client ID</h2>
        <div class="flex justify-between gap-4">
          <input
            :class="fieldClass"
            v-model="clientId"
            type="text"
            placeholder="9029348751029348102"
            maxlength="19"
          />
          <a class="btn"
            :disabled="valid ? null : true"
            :href="valid ? discordUrl : undefined"
            target="_blank">
            <IconFasUnlock />
            Authorize
          </a>
        </div>
        <div v-if="!valid" class="flex py-1 items-center">
          <IconFasTriangleExclamation />
          <p class="!mb-0">
            <span class="ml-2">Your bot's client ID should be 18-19 digits long.</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const idRegex = /^\d{18,19}$/

const clientId = ref<string>("")
const valid = computed(() => clientId.value && idRegex.test(clientId.value))
const discordUrl = computed(() =>
  `https://discord.com/api/oauth2/authorize?client_id=${clientId.value}&permissions=536889360&scope=bot%20applications.commands`
)

const fieldClass = computed(() => ({
  'input': true,
  'input-bordered': true,
  'input-success': valid.value,
  'input-error': !valid.value,
}))
</script>
