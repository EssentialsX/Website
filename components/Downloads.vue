<template>
    <div>
        <div class="content">
            <p v-if="loading">
                <i>Currently loading downloads, please wait...</i>
                <progress class="progress is-primary" max="100">50%</progress>
            </p>
            <p v-if="version && !loading">The latest version of EssentialsX is <b>{{version}}</b> (build {{build}}, commit <a :href='commitLink'>{{commit}}</a>).</p>
        </div>
        <b-notification type="is-danger" v-if="error" :closable="false">
            <p>
                Could not load the latest dev builds. <a href="#" @click="refreshJenkins">Retry</a>, or
                click <a href="https://ci.ender.zone/job/EssentialsX">here</a> to view builds on Jenkins.
            </p>
        </b-notification>

        <div v-if="version && !loading">
            <h1 class="title is-4">Core</h1>
            
            <downloads-item
                name="EssentialsX Core"
                description="Core functionality: teleports, private messages, homes, warps and more"
                :version="version"
                :download="plugins['EssentialsX '].main"
            />

            <h1 class="title is-4">Recommended add-ons</h1>

            <downloads-item
                name="EssentialsX Chat"
                description="Chat formatting, local chat"
                :version="version"
                :download="plugins['EssentialsX Protect'].main"
            />
            <downloads-item
                name="EssentialsX Spawn"
                description="Spawnpoint control, per-player spawns"
                :version="version"
                :download="plugins['EssentialsX GeoIP'].main"
            />

            <h1 class="title is-4">Other add-ons</h1>

            <downloads-item
                name="EssentialsX AntiBuild"
                description="Simple permissions-based building control"
                :version="version"
                :download="plugins['EssentialsX AntiBuild'].main"
            />
            <downloads-item
                name="EssentialsX Geo"
                description="Geographical player lookup (formerly EssentialsX GeoIP)"
                :version="version"
                :download="plugins['EssentialsX GeoIP'].main"
            />
            <downloads-item
                name="EssentialsX Protect"
                description="Configurable world protection and control"
                :version="version"
                :download="plugins['EssentialsX Spawn'].main"
            />
            <downloads-item
                name="EssentialsX XMPP"
                description="Lightweight chat, messaging and server log integration with Jabber/XMPP services"
                :version="version"
                :download="plugins['EssentialsX XMPP'].main"
            />
        </div>
    </div>
</template>

<script>
import DownloadsItem from "./DownloadsItem.vue";

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
        DownloadsItem
    }
}
</script>
