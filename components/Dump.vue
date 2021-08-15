<template>
  <div>
    <b-notification type="is-danger" v-if="invalid" :closable="false">
      <p>Invalid dump key!</p>
    </b-notification>

    <b-notification type="is-danger" v-if="error" :closable="false">
      <p>Error while loading dump: {{ error }}</p>
    </b-notification>

    <b-skeleton height="120px" :count="5" :active="isLoading" />

    <div v-if="loaded">
      <div class="message is-primary">
        <div class="message-header">
          <p>EssentialsX version</p>
        </div>
        <div class="message-body">
          <nav class="level">
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Version</p>
                <p class="title is-6">{{ essVersion }}</p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Update Branch</p>
                <p class="title is-6">{{ essBranch }}</p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Economy Layer</p>
                <p class="title is-6">{{ essLayer }}</p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Layer Backend</p>
                <p class="title is-6">{{ essBackend }}</p>
              </div>
            </div>
          </nav>
        </div>
      </div>
      
      <div class="message is-serverinfo">
        <div class="message-header">
          <p>Server version</p>
        </div>
        <div class="message-body">
          <nav class="level">
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Brand</p>
                <p class="title is-6">{{ srvBrand }}</p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Server Version</p>
                <p class="title is-6">{{ srvVersion }}</p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Bukkit Version</p>
                <p class="title is-6">{{ srvBukkitVersion }}</p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Support Status</p>
                <p class="title is-6">{{ srvSupport }}</p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Support Status Trigger</p>
                <p class="title is-6">{{ srvTrigger }}</p>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <div class="message is-info">
        <div class="message-header">
          <p>Server environment</p>
        </div>
        <div class="message-body">
          <nav class="level">
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Java Version</p>
                <p class="title is-6">{{ envJava }}</p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">OS Name</p>
                <p class="title is-6">{{ envOs }}</p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Uptime</p>
                <p class="title is-6">{{ envUptime }}</p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Allocated Memory</p>
                <p class="title is-6">{{ envMemory }}</p>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <collapse-message type="is-dark">
        <template v-slot:title>
          EssentialsX addons ({{ addons.length }})
        </template>

        <DumpPlugins v-if="addons.length > 0" :entries="addons" />
        <div v-else class="content">
          <p>No addons installed.</p>
        </div>
      </collapse-message>

      <collapse-message type="is-dark">
        <template v-slot:title>
          Server plugins ({{ plugins.length }})
        </template>

        <DumpPlugins :entries="plugins" searchable />
      </collapse-message>

      <collapse-message type="is-black" v-if="config">
        <template v-slot:title>
          Config
        </template>

        <highlightjs class="p-0" language="yaml" :code="config" />
      </collapse-message>

      <collapse-message type="is-black" v-if="kits">
        <template v-slot:title>
          Kits
        </template>

        <highlightjs class="p-0" language="yaml" :code="kits" />
      </collapse-message>

      <collapse-message type="is-black" v-if="discord">
        <template v-slot:title>
          Discord config
        </template>

        <highlightjs class="p-0" language="yaml" :code="discord" />
      </collapse-message>

      <div class="box">
        Generated by
        <span v-if="senderUuid"> <img :src="senderImg" /></span>
        <b>{{ senderName }}</b>
        at {{ new Date(timestamp).toLocaleString() }}
      </div>
    </div>
  </div>
</template>
<script>
import CollapseMessage from "./CollapseMessage"
import DumpPlugins from "./DumpPlugins";
import axios from "axios";

export default {
  components: {
    CollapseMessage,
    DumpPlugins
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
      log: null,

      addons: [],
      plugins: [],

      timestamp: 0,
      sender: "",
      senderUuid: "",
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

            this.addons = dump["ess-data"].addons
            this.plugins = dump.plugins

            this.timestamp = dump.meta.timestamp
            this.sender = dump.meta.sender
            this.senderUuid = dump.meta.senderUuid
          }
        })
        this.loaded = true
      } catch (e) {
        console.log(e)
        this.error = e.response ? e.response.data : e.message
      }
    }
  },
  computed: {
    isLoading() {
      return !this.loaded && !this.error && !this.invalid;
    },
    senderName() {
      return this.sender || "CONSOLE";
    },
    senderImg() {
      return `https://crafthead.net/helm/${this.senderUuid}/16`;
    }
  }
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