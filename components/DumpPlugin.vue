<template>
  <article class="media box has-background-primary has-text-white">
    <div class="media-content">
      <div class="content has-text-left">
        <p>
          <strong class="has-text-white">{{ name }} ({{ main }})</strong>
        </p>
      </div>

      <nav class="level is-mobile">
        <div class="level-item has-text-left">
          <div>
            <p class="heading has-text-centered">Version</p>
            <p class="has-text-white">{{ version }}</p>
          </div>
        </div>
        <div class="level-item has-text-left">
          <div>
            <p class="heading has-text-centered">Status</p>
            <p class="has-text-white">{{ enabled ? "Enabled" : "Disabled" }} ({{ official ? "Official" : "Unofficial" }})</p>
          </div>
        </div>
        <div class="level-item has-text-left">
          <div>
            <p class="heading has-text-centered">Supported</p>
            <p class="has-text-white">{{ unsupported ? "No" : "Yes" }}</p>
          </div>
        </div>
      </nav>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    main: {
      type: String,
      required: true
    },
    version: {
      type: String,
      required: true
    },
    enabled: {
      type: Boolean,
      required: true
    },
    official: {
      type: Boolean,
      required: true
    },
    unsupported: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    tagClass(tag) {
      let tagColor = tag.color || "primary";
      return {
        tag: true,
        [`is-${tagColor}`]: true
      };
    }
  }
}
</script>
