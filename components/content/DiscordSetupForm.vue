<template>
  <div class="mx-auto w-full my-8 flex justify-center">
    <KitCard>
      <p class="font-semibold text-lg !mt-0 mb-4">Enter your client ID</p>
      <div class="flex justify-between gap-4 px-2 pb-1">
        <input
          v-model="clientId"
          type="text"
          placeholder="9029348751029348102"
          maxlength="18"
          :class="fieldClass"
        />
        <KitButton
          text-color="!text-white"
          label="Authorize"
          :class="buttonClass"
          :disabled="!valid"
          :href="valid ? discordUrl : null"
          target="_blank"
        >
          <template #iconLeft><IconFasUnlock /></template>
        </KitButton>
      </div>
      <div v-if="!valid" class="flex pt-2 pb-1 px-2 items-center">
        <IconFasTriangleExclamation />
        <p class="!mb-0">
          <span class="ml-2">Your bot's client ID should be 18 digits long.</span>
        </p>
      </div>
    </KitCard>
  </div>
</template>

<script lang="ts" setup>
const idRegex = /^\d{18}$/

const clientId = ref<string>("")
const valid = computed(() => clientId.value && idRegex.test(clientId.value))
const discordUrl = computed(() =>
  `https://discord.com/api/oauth2/authorize?client_id=${clientId.value}&permissions=536889360&scope=bot%20applications.commands`
)

const fieldClass = computed(() => ({
    'rounded-md': true,
    border: true,
    'border-red': !valid.value,
    'border-green-400': valid.value,
    'w-xl': true,
    'p-2': true
}))

const buttonClass = computed(() => ({
  'bg-red-200': !valid.value,
  '!no-underline': true,
  cursor: valid.value ? 'pointer' : 'not-allowed',
}))
</script>
