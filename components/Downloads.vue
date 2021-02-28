<template>
    <div>
        <div class="columns">
            <div class="column">
                <div class="level">
                    <div class="level-left">
                        <div class="level-item">
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
                        </div>
                    </div>
                    <div class="level-right">
                        <div class="level-item">
                            <div class="buttons has-addons">
                                <b-button
                                    label="Single"
                                    @click="bundleEnabled = false"
                                    :type="bundleEnabled ? null : 'is-primary'"
                                />
                                <b-button
                                    label="Bundle"
                                    @click="bundleEnabled = true"
                                    :type="bundleEnabled ? 'is-primary' : null"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                
                

                <div class="content">
                    <p v-if="version && !loading">
                        The latest <b>{{ branch }}</b> version of EssentialsX is <b>{{ version }}</b><span v-if="this.build"> (build {{ build }}, commit <a :href='commitLink'>{{ commit }}</a>)</span>.
                        You can view the changelog <a :href="changelog">here</a>.
                    </p>
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
                        v-bind="plugins.core"
                        bundle-required
                        :bundle-enabled="bundleEnabled"
                        :bundle-selected="bundleSelected.core"
                        @toggle-bundle-selection="toggleBundleSelection('core')"
                        :version="version"
                    />

                    <h1 class="title is-4">Recommended add-ons</h1>

                    <downloads-item
                        v-bind="plugins.chat"
                        :bundle-enabled="bundleEnabled"
                        :bundle-selected="bundleSelected.chat"
                        @toggle-bundle-selection="toggleBundleSelection('chat')"
                        :version="version"
                    />
                    <downloads-item
                        v-bind="plugins.spawn"
                        :bundle-enabled="bundleEnabled"
                        :bundle-selected="bundleSelected.spawn"
                        @toggle-bundle-selection="toggleBundleSelection('spawn')"
                        :version="version"
                    />

                    <h1 class="title is-4">Other add-ons</h1>

                    <downloads-item
                        v-bind="plugins.antibuild"
                        :bundle-enabled="bundleEnabled"
                        :bundle-selected="bundleSelected.antibuild"
                        @toggle-bundle-selection="toggleBundleSelection('antibuild')"
                        :version="version"
                    />
                    <downloads-item
                        v-bind="plugins.discord"
                        v-if="plugins.discord.downloadUrl"
                        :bundle-enabled="bundleEnabled"
                        :bundle-selected="bundleSelected.discord"
                        @toggle-bundle-selection="toggleBundleSelection('discord')"
                        :version="version"
                    />
                    <downloads-item
                        v-bind="plugins.geo"
                        :bundle-enabled="bundleEnabled"
                        :bundle-selected="bundleSelected.geo"
                        @toggle-bundle-selection="toggleBundleSelection('geo')"
                        :version="version"
                    />
                    <downloads-item
                        v-bind="plugins.protect"
                        :bundle-enabled="bundleEnabled"
                        :bundle-selected="bundleSelected.protect"
                        @toggle-bundle-selection="toggleBundleSelection('protect')"
                        :version="version"
                    />
                    <downloads-item
                        v-bind="plugins.xmpp"
                        v-if="plugins.xmpp.downloadUrl"
                        :bundle-enabled="bundleEnabled"
                        :bundle-selected="bundleSelected.xmpp"
                        @toggle-bundle-selection="toggleBundleSelection('xmpp')"
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
            branch: this.startBranch,
            bundleEnabled: false,
            bundleSelected: {
                core: true,
                antibuild: false,
                chat: false,
                discord: false,
                geo: false,
                protect: false,
                spawn: false,
                xmpp: false
            }
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
    methods: {
        toggleBundleSelection(module) {
            this.bundleSelected[module] = !this.bundleSelected[module];
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
