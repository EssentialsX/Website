<template>
    <section class="section">
        <div class="box content">
            <p class="tip">
                Not sure what to download? See the <SaberLink to="/wiki/Installing-EssentialsX.html">Installing EssentialsX guide</SaberLink> and <SaberLink to="/wiki/Module-Breakdown.html">module breakdown</SaberLink>.
            </p>
            <p v-if="loading">
                <i>Currently loading downloads, please wait...</i>
                <progress class="progress is-primary" max="100">60%</progress>
            </p>
            <p v-if="version">The latest version of EssentialsX is <b>{{version}}</b> (build {{build}}).</p>
        </div>
        <b-notification type="is-danger" v-if="error">
            <p>
                Could not retrieve information about the latest version.
                Click <a href="https://ci.ender.zone/job/EssentialsX">here</a> to view builds on Jenkins.
            </p>
        </b-notification>
        <div v-if="version" class="tile is-ancestor">
            <div class="tile is-parent is-vertical is-3">
                <downloads-tile
                    bold=true
                    text="EssentialsX"
                    description="Core features: messages, teleports, homes, warps and more"
                    :version="version"
                    :url="plugins['EssentialsX '].main"
                />
            </div>
            <div class="tile is-parent is-vertical is-3">
                <downloads-tile
                    text="AntiBuild"
                    description="Restrict building with permissions"
                    :version="version"
                    :url="plugins['EssentialsX AntiBuild'].main"
                />
                <downloads-tile
                    text="Protect"
                    description="Configurable world protection"
                    :version="version"
                    :url="plugins['EssentialsX Protect'].main"
                />
            </div>
            <div class="tile is-parent is-vertical is-3">
                <downloads-tile
                    text="Chat"
                    description="Chat formatting & local chat"
                    :version="version"
                    :url="plugins['EssentialsX Chat'].main"
                />
                <downloads-tile
                    text="Spawn"
                    description="Fine-grained spawnpoint control"
                    :version="version"
                    :url="plugins['EssentialsX Spawn'].main"
                />
            </div>
            <div class="tile is-parent is-vertical is-3">
                <downloads-tile
                    text="GeoIP"
                    description="Geographic player lookup"
                    :version="version"
                    :url="plugins['EssentialsX GeoIP'].main"
                />
                <downloads-tile
                    text="XMPP"
                    description="Jabber server integration"
                    :version="version"
                    :url="plugins['EssentialsX XMPP'].main"
                />
            </div>
        </div>
        <button v-if="!loading" @click="refreshJenkins" class="button">
            <span>Refresh</span>
        </button>
    </section>
</template>

<script>
import DownloadsTile from "./DownloadsTile.vue";

export default {
    computed: {
        version() {
            return this.external.jenkins.version;
        },
        build() {
            return this.external.jenkins.build;
        },
        error() {
            return this.external.jenkins.error;
        },
        loading() {
            return this.external.jenkins.loading;
        },
        plugins() {
            return this.external.jenkins.plugins;
        }
    },
    components: {
        DownloadsTile
    }
}
</script>
