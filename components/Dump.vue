<template>
  <div>
    <b-notification type="is-danger" v-show="invalid" :closable="false">
      <p>
        Invalid Dump Key!
      </p>
    </b-notification>
    <b-notification type="is-danger" v-show="error" :closable="false">
      <p>
        Error while loading dump: {{ error }}
      </p>
    </b-notification>
    <b-notification type="is-warning" v-show="!loaded && !error && !invalid" :closable="false">
      <p>
        Loading Dump...
      </p>
    </b-notification>
    <div v-show="loaded">
      <div class="columns">
        <div class="column">
          <article class="media box has-background-primary has-text-white">
            <div class="media-content">
              <div class="content has-text-left">
                <p>
                  <strong class="has-text-white">Essentials Version Information</strong>
                </p>
              </div>

              <nav class="level is-mobile">
                <div class="level-item has-text-left">
                  <div>
                    <p class="heading has-text-centered">Version</p>
                    <p class="has-text-white">{{ essVersion }}</p>
                  </div>
                </div>
                <div class="level-item has-text-left">
                  <div>
                    <p class="heading has-text-centered">Update Branch</p>
                    <p class="has-text-white">{{ essBranch }}</p>
                  </div>
                </div>
                <div class="level-item has-text-left">
                  <div>
                    <p class="heading has-text-centered">Economy Layer</p>
                    <p class="has-text-white">{{ essLayer }}</p>
                  </div>
                </div>
                <div class="level-item has-text-left">
                  <div>
                    <p class="heading has-text-centered">Layer Backend</p>
                    <p class="has-text-white">{{ essBackend }}</p>
                  </div>
                </div>
              </nav>
            </div>
          </article>
          <article class="media box has-background-serverinfo has-text-white">
            <div class="media-content">
              <div class="content has-text-left">
                <p>
                  <strong class="has-text-white">Server Version Information</strong>
                </p>
              </div>

              <nav class="level is-mobile">
                <div class="level-item has-text-left">
                  <div>
                    <p class="heading has-text-centered">Brand</p>
                    <p class="has-text-white">{{ srvBrand }}</p>
                  </div>
                </div>
                <div class="level-item has-text-left">
                  <div>
                    <p class="heading has-text-centered">Server Version</p>
                    <p class="has-text-white">{{ srvVersion }}</p>
                  </div>
                </div>
                <div class="level-item has-text-left">
                  <div>
                    <p class="heading has-text-centered">Bukkit Version</p>
                    <p class="has-text-white">{{ srvBukkitVersion }}</p>
                  </div>
                </div>
                <div class="level-item has-text-left">
                  <div>
                    <p class="heading has-text-centered">Support Status</p>
                    <p class="has-text-white">{{ srvSupport }}</p>
                  </div>
                </div>
                <div class="level-item has-text-left">
                  <div>
                    <p class="heading has-text-centered">Support Status Trigger</p>
                    <p class="has-text-white">{{ srvTrigger }}</p>
                  </div>
                </div>
              </nav>
            </div>
          </article>
          <article class="media box has-background-spigot has-text-white">
            <div class="media-content">
              <div class="content has-text-left">
                <p>
                  <strong class="has-text-white">Server Environment Information</strong>
                </p>
              </div>

              <nav class="level is-mobile">
                <div class="level-item has-text-left">
                  <div>
                    <p class="heading has-text-centered">Java Version</p>
                    <p class="has-text-white">{{ envJava }}</p>
                  </div>
                </div>
                <div class="level-item has-text-left">
                  <div>
                    <p class="heading has-text-centered">OS Name</p>
                    <p class="has-text-white">{{ envOs }}</p>
                  </div>
                </div>
                <div class="level-item has-text-left">
                  <div>
                    <p class="heading has-text-centered">Uptime</p>
                    <p class="has-text-white">{{ envUptime }}</p>
                  </div>
                </div>
                <div class="level-item has-text-left">
                  <div>
                    <p class="heading has-text-centered">Allocated Memory</p>
                    <p class="has-text-white">{{ envMemory }}</p>
                  </div>
                </div>
              </nav>
            </div>
          </article>
          <b-collapse class="card has-background-dark" :open="false">
            <template #trigger="props">
              <div
                  class="card-header"
                  role="button">
                <p class="card-header-title has-text-white">Essentials Addons</p>
                <a class="card-header-icon"> {{ props.open ? "⬆️" : "⬇️" }}
                </a>
              </div>
            </template>

            <div class="card-content" id="addons" />
          </b-collapse>
          <b-collapse class="card has-background-dark" :open="false">
            <template #trigger="props">
              <div
                  class="card-header"
                  role="button">
                <p class="card-header-title has-text-white">Plugins</p>
                <a class="card-header-icon"> {{ props.open ? "⬆️" : "⬇️" }}
                </a>
              </div>
            </template>

            <div class="card-content" id="plugins" />
          </b-collapse>
          <b-collapse class="card has-background-dark" :open="false" v-if="config">
            <template #trigger="props">
              <div
                  class="card-header"
                  role="button">
                <p class="card-header-title has-text-white">Config</p>
                <a class="card-header-icon"> {{ props.open ? "⬆️" : "⬇️" }}
                </a>
              </div>
            </template>

            <div class="card-content">
              <pre v-highlightjs><code class="yaml">{{ config }}</code></pre>
            </div>
          </b-collapse>
          <b-collapse class="card has-background-dark" :open="false" v-if="kits">
            <template #trigger="props">
              <div
                  class="card-header"
                  role="button">
                <p class="card-header-title has-text-white">Kits</p>
                <a class="card-header-icon"> {{ props.open ? "⬆️" : "⬇️" }}
                </a>
              </div>
            </template>

            <div class="card-content">
              <pre v-highlightjs><code class="yaml">{{ kits }}</code></pre>
            </div>
          </b-collapse>
          <b-collapse class="card has-background-dark" :open="false" v-if="discord">
            <template #trigger="props">
              <div
                  class="card-header"
                  role="button">
                <p class="card-header-title has-text-white">Discord Config</p>
                <a class="card-header-icon"> {{ props.open ? "⬆️" : "⬇️" }}
                </a>
              </div>
            </template>

            <div class="card-content">
              <pre v-highlightjs><code class="yaml">{{ discord }}</code></pre>
            </div>
          </b-collapse>
          <b-collapse class="card has-background-dark" :open="false" v-if="log">
            <template #trigger="props">
              <div
                  class="card-header"
                  role="button">
                <p class="card-header-title has-text-white">Log</p>
                <a class="card-header-icon"> {{ props.open ? "⬆️" : "⬇️" }}
                </a>
              </div>
            </template>

            <div class="card-content">
              <pre v-highlightjs><code>{{ log }}</code></pre>
            </div>
          </b-collapse>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import DumpPlugin from "./DumpPlugin";
import Vue from "vue";
import VueHighlightJS from 'vue3-highlightjs'
import 'highlight.js/styles/stackoverflow-dark.css'
import axios from "axios";

Vue.use(VueHighlightJS)

export default {
  components: {
    DumpPlugin
  },
  mounted() {
    this.loadData()
  },
  data() {
    return {
      loaded: false,
      error: null,
      invalid: false,

      essVersion: null,
      essBranch: null,
      essLayer: null,
      essBackend: null,

      srvBrand: null,
      srvVersion: null,
      srvBukkitVersion: null,
      srvSupport: null,
      srvTrigger: null,

      envJava: null,
      envOs: null,
      envUptime: null,
      envMemory: null,

      config: null,
      discord: null,
      kits: null,
      log: null
    }
  },
  methods: {
    async loadData() {
      if (!window.location.hash) {
        this.invalid = true
        return;
      }

      try {
        const { data } = await axios.get("https://api.paste.gg/v1/pastes/" + window.location.hash.substring(1) + "?full=true")
        data.result.files.forEach(file => {
          if (file.name === "config.yml") {
            this.config = file.content.value
          } else if (file.name === "kits.yml") {
            this.kits = file.content.value
          } else if (file.name === "discord-config.yml") {
            this.discord = file.content.value
          } else if (file.name === "latest.log") {
            this.log = file.content.value
          } else if (file.name === "dump.json") {
            const dump = JSON.parse(file.content.value)
            this.essVersion = dump["ess-data"].version
            this.essBranch = dump["ess-data"]["update-data"].branch
            this.essLayer = dump["ess-data"]["economy-layer"].enabled ? (dump["ess-data"]["economy-layer"].name === "null" ? "None" : dump["ess-data"]["economy-layer"].name) : "Disabled"
            this.essBackend = dump["ess-data"]["economy-layer"]["backend-name"] === "null" ? "N/A" : dump["ess-data"]["economy-layer"]["backend-name"]

            this.srvBrand = dump["server-data"]["server-brand"]
            this.srvVersion = dump["server-data"]["server-version"]
            this.srvBukkitVersion = dump["server-data"]["bukkit-version"]
            this.srvSupport = dump["server-data"]["support-status"].status + " (" + (dump["server-data"]["support-status"].supported ? "Supported" : "Unsupported") + ")"
            this.srvTrigger = dump["server-data"]["support-status"].trigger === null ? "N/A" : dump["server-data"]["support-status"].trigger

            this.envJava = dump.environment["java-version"]
            this.envOs = dump.environment["operating-system"]
            this.envUptime = dump.environment.uptime
            this.envMemory = dump.environment["allocated-memory"]

            dump["ess-data"].addons.forEach(addon => {
              createPlugin("addons", addon.name, addon.main, addon.version, addon.enabled, addon.official, addon.unsupported)
            })

            dump.plugins.forEach(addon => {
              createPlugin("plugins", addon.name, addon.main, addon.version, addon.enabled, addon.official, addon.unsupported)
            })
          }
        })
        this.loaded = true
      } catch (e) {
        console.log(e)
        this.error = e.response ? e.response.data : e.message
      }
    }
  }
}

function createPlugin(target, name, main, version, enabled, official, unsupported) {
  const div = document.createElement('div')
  div.id = 'plugin'
  document.getElementById(target).appendChild(div)

  const ComponentCtor = Vue.extend(DumpPlugin)
  const instance = new ComponentCtor({
    propsData: {
      name: name,
      main: main,
      version: version,
      enabled: enabled,
      official: official,
      unsupported: unsupported
    }
  })
  instance.$mount('#plugin')
}
</script>

<style>
pre {
  overflow-x: auto;
  white-space: pre-wrap;
  white-space: -moz-pre-wrap;
  white-space: -o-pre-wrap;
  word-wrap: break-word;
}
</style>