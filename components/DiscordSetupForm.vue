<template>
  <div class="columns is-centered">
    <div class="column is-12-tablet is-8-desktop is-6-widescreen">
      <b-field label="Client ID" :type="fieldType">
        <b-input
          v-model="clientId"
          type="text"
          placeholder="806202490989705300"
          required
          validation-message="Your bot's client ID should be 18 digits long."
          pattern="^\d{18}$"
          maxlength="18"
          :icon="valid ? 'robot-excited' : 'robot'"
          expanded
        />
        <p class="control">
          <b-button
            type="is-primary"
            tag="a"
            label="Authorize"
            :disabled="!valid"
            :href="discordUrl"
          />
        </p>
      </b-field>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

const idRegex = /^\d{18}$/

export default Vue.extend({
  data() {
    return {
      clientId: null,
    }
  },
  computed: {
    discordUrl() {
      return `https://discord.com/api/oauth2/authorize?client_id=${this.$data.clientId}&permissions=536889360&scope=bot%20applications.commands`
    },
    valid() {
      return idRegex.test(this.$data.clientId)
    },
    fieldType() {
      return idRegex.test(this.$data.clientId) ? 'is-success' : 'is-danger'
    }
  },
})
</script>
