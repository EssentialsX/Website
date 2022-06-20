<template>
  <div class="mx-auto w-full my-8 flex justify-center">
    <KitCard>
      <p class="font-semibold text-lg !mt-0 mb-4">Enter your client ID</p>
      <div class="flex justify-between gap-4 px-2">
        <input
          v-model="clientId"
          type="text"
          placeholder="9029348751029348102"
          maxlength="18"
          :class="fieldClass"
        />
        <KitButton
          bg-color="bg-red-600"
          text-color="!text-white"
          tag="a"
          label="Authorize"
          :class="buttonClass"
          :disabled="!valid"
          :href="valid ? discordUrl : null"
          target="_blank"
        />
      </div>
      <div class="flex justify-center">
        <p v-if="!valid" class="!mb-0">
          <fa-icon icon="exclamation-triangle"></fa-icon>
          <span class="ml-1">Your bot's client ID should be 18 digits long.</span>
        </p>
      </div>
    </KitCard>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

const idRegex = /^\d{18}$/

@Component
export default class DiscordSetupForm extends Vue {
  clientId?: string = ''

  get discordUrl() {
    return `https://discord.com/api/oauth2/authorize?client_id=${this.$data.clientId}&permissions=536889360&scope=bot%20applications.commands`
  }

  get valid() {
    return this.clientId && idRegex.test(this.clientId)
  }

  get fieldClass() {
    return {
      'rounded-md': true,
      border: true,
      'border-red': !this.valid,
      'border-green-400': this.valid,
      'w-2xl': true,
    }
  }

  get buttonClass() {
    return {
      'bg-red-200': !this.valid,
      '!no-underline': true,
      '!py-3': true,
    }
  }
}
</script>
