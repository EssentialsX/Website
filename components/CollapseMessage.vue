<template>
  <b-collapse
    :class="collapseClass"
    :open.sync="open">
    <template #trigger="props">
      <div
          class="message-header"
          role="button">
        <p>
          <slot name="title">Message</slot>
        </p>
        <fa-icon
          pack="fas"
          :icon="props.open ? 'chevron-up' : 'chevron-down'" />
      </div>
    </template>

    <div :class="contentClass">
      <slot></slot>
    </div>
  </b-collapse>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: false,
      default: ""
    },
    padding: {
      type: Number,
      required: false,
      default: 4
    }
  },
  data() {
    return {
      open: false,
    }
  },
  methods: {
    setOpen(value) {
      this.open = open
    }
  },
  computed: {
    collapseClass() {
      return {
        message: true,
        [this.type]: true,
        open: this.open,
      }
    },
    contentClass() {
      return {
        [`p-${this.padding}`]: true
      }
    }
  }
}
</script>

<style scoped>
.message:not(.open) .message-header {
  border-radius: 4px;
}
</style>
