<template>
    <div>
        <div class="box content">
            <p>
                EssentialsX is developed by volunteers in our free time.
                If you'd like to support the development of EssentialsX, please <a href="https://www.patreon.com/essentialsx" target="_blank">consider supporting us on Patreon</a>.
            </p>
            <p class="tip">
                Not sure what to download? See the <SaberLink to="/wiki/Installing-EssentialsX.html">Installing EssentialsX guide</SaberLink> and <SaberLink to="/wiki/Module-Breakdown.html">module breakdown</SaberLink>.
            </p>
            <p v-if="loading">
                <i>Currently loading downloads, please wait...</i>
                <progress class="progress is-primary" max="100">60%</progress>
            </p>
            <p v-if="version && !loading">The latest version of EssentialsX is <b>{{version}}</b> (build {{build}}, commit <a :href='commitLink'>{{commit}}</a>).</p>
        </div>
        <b-notification type="is-danger" v-if="error">
            <p>
                Could not retrieve information about the latest version.
                Click <a href="https://ci.ender.zone/job/EssentialsX">here</a> to view builds on Jenkins.
            </p>
        </b-notification>
        <div v-if="version && !loading" class="tile is-ancestor">
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
    </div>
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
        },
        commit() {
            return this.external.jenkins.commit ? this.external.jenkins.commit.substring(0, 7) : null;
        },
        commitLink() {
            return this.external.jenkins.commit ? `https://github.com/EssentialsX/Essentials/commit/${this.external.jenkins.commit}` : null;
        }
    },
    components: {
        DownloadsTile
    }
}
</script>
