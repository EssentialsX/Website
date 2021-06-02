<template>
    <div>
        <div class="columns">
            <div class="column">
                <div class="buttons has-addons">
                    <b-button
                        label="Stable release"
                        @click="branch = 'stable'"
                        :loading="this.external.builds['stable'].loading"
                        :type="branch == 'stable' ? 'is-primary' : null"
                    />
                    <b-button
                        label="Development build"
                        @click="branch = 'dev'"
                        :loading="this.external.builds['dev'].loading"
                        :type="branch == 'dev' ? 'is-primary' : null"
                    />
                </div>

                <div class="content">
                    <p v-if="version && !loading">
                        The latest <b>{{ branch }}</b> version of EssentialsX is <b>{{ version }}</b>
                        <span v-if="this.build"> (build {{ build }}<span v-if="this.commit">, commit <a :href='commitLink'>{{ commit }}</a></span>)</span>.
                        You can view the changelog <a :href="changelog">here</a>.
                    </p>
                </div>

                <b-notification type="is-danger" v-if="error" :closable="false">
                    <p>
                        Could not load the latest dev builds. <a href="#" @click="refreshDownloads">Retry</a>, or
                        click <a href="https://ci.ender.zone/job/EssentialsX">here</a> to view builds on Jenkins.
                    </p>
                </b-notification>
                
                <div v-if="version && !loading">
                    <h1 class="title is-4">Core</h1>
                    
                    <downloads-item
                        v-bind="plugins.core"
                        :version="version"
                    />

                    <h1 class="title is-4">Recommended add-ons</h1>

                    <downloads-item
                        v-bind="plugins.chat"
                        :version="version"
                    />
                    <downloads-item
                        v-bind="plugins.spawn"
                        :version="version"
                    />

                    <h1 class="title is-4">Other add-ons</h1>

                    <downloads-item
                        v-bind="plugins.antibuild"
                        :version="version"
                    />
                    <downloads-item
                        v-bind="plugins.discord"
                        v-if="plugins.discord.downloadUrl"
                        :version="version"
                    />
                    <downloads-item
                        v-bind="plugins.discordlink"
                        v-if="plugins.discordlink.downloadUrl"
                        :version="version"
                    />
                    <downloads-item
                        v-bind="plugins.geo"
                        :version="version"
                    />
                    <downloads-item
                        v-bind="plugins.protect"
                        :version="version"
                    />
                    <downloads-item
                        v-bind="plugins.xmpp"
                        v-if="plugins.xmpp.downloadUrl"
                        :version="version"
                    />
                </div>
            </div>
            <div class="column is-one-third">
                <support-info />
            </div>
        </div>
    </div>
</template>

<script>
import DownloadsItem from "./DownloadsItem.vue";
import SupportInfo from "./SupportInfo.vue";

export default {
    data() {
        return {
            branch: this.startBranch
        };
    },
    computed: {
        branchInfo() {
            return this.external.builds[this.branch];
        },
        version() {
            return this.branchInfo.version;
        },
        build() {
            return this.branchInfo.build;
        },
        error() {
            return this.branchInfo.error;
        },
        loading() {
            return this.branchInfo.loading;
        },
        plugins() {
            return this.branchInfo.plugins;
        },
        commit() {
            return this.branchInfo.commit ? this.branchInfo.commit.substring(0, 7) : null;
        },
        commitLink() {
            return this.commit ? `https://github.com/EssentialsX/Essentials/commit/${this.commit}` : null;
        },
        changelog() {
            return this.branchInfo.changelogUrl;
        }
    },
    components: {
        DownloadsItem,
        SupportInfo
    },
    props: {
        startBranch: {
            type: String,
            required: false,
            default: "dev"
        }
    }
}
</script>
