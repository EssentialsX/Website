<template>
    <section class="section">
        <div class="box content">
            <p class="tip">
                Not sure what the different jars do? See the <SaberLink to="/wiki/Downloading-EssentialsX.html">downloads guide</SaberLink>.
            </p>
            <p v-if="loading">
                <i>Currently loading downloads, please wait...</i>
                <progress class="progress is-primary" max="100">60%</progress>
            </p>
            <p v-if="buildNo">The latest version of EssentialsX is <b>{{build}}</b>.</p>
        </div>
        <b-notification type="is-danger" v-if="failed">
            <p>
                Could not retrieve information about the latest version.
                Click <a href="https://ci.ender.zone/job/EssentialsX">here</a> to view builds on Jenkins.
            </p>
        </b-notification>
        <div v-if="buildNo" class="tile is-ancestor">
            <div class="tile is-parent is-vertical is-3">
                <downloads-tile
                    bold="true"
                    text="EssentialsX"
                    description="Core features"
                    :version="buildNo"
                    :url="plugins['EssentialsX '].main"
                />
            </div>
            <div class="tile is-parent is-vertical is-3">
                <downloads-tile
                    text="AntiBuild"
                    description="Build permissions"
                    :version="buildNo"
                    :url="plugins['EssentialsX AntiBuild'].main"
                />
                <downloads-tile
                    text="Protect"
                    description="World and gameplay rules"
                    :version="buildNo"
                    :url="plugins['EssentialsX Protect'].main"
                />
            </div>
            <div class="tile is-parent is-vertical is-3">
                <downloads-tile
                    text="Chat"
                    description="Chat formatting, local chat"
                    :version="buildNo"
                    :url="plugins['EssentialsX Chat'].main"
                />
                <downloads-tile
                    text="Spawn"
                    description="Spawn point management"
                    :version="buildNo"
                    :url="plugins['EssentialsX Spawn'].main"
                />
            </div>
            <div class="tile is-parent is-vertical is-3">
                <downloads-tile
                    text="GeoIP"
                    description="Geolocation add-ons"
                    :version="buildNo"
                    :url="plugins['EssentialsX GeoIP'].main"
                />
                <downloads-tile
                    text="XMPP"
                    description="Jabber chat integration"
                    :version="buildNo"
                    :url="plugins['EssentialsX XMPP'].main"
                />
            </div>
        </div>
        <button v-if="!loading" @click="updateInfo" class="button">
            <span>Refresh</span>
        </button>
    </section>
</template>

<script>
import DownloadsTile from "./DownloadsTile.vue";

import axios from "axios";

const mainCI = "https://ci.ender.zone/job/EssentialsX/";
const mirrorCI = null; // "https://ci.akpmakes.tech/job/EssentialsX/";
const corsAnywhere = "https://cors-anywhere.herokuapp.com/";

axios.defaults.baseURL = corsAnywhere + mainCI;

const versionRegex = /EssentialsX[a-zA-Z]*-([0-9\.pre-]+?)\.jar/;

function getVersionFromArtifact(name) {
    let m;

    while ((m = versionRegex.exec(name)) !== null) {
       return m[1];
    }
}

export default {
    data() {
        return {
            buildNo: null,
            failed: null,
            loading: null,
            plugins: {},
        };
    },
    computed: {
        build() {
            return this.buildNo || "unknown";
        },
    },
    methods: {
        updateInfo() {
            this.loading = true;
            axios.get("lastSuccessfulBuild/api/json")
                .then(response => {
                    this.buildNo = getVersionFromArtifact(response.data.artifacts[0].displayPath);;
                    response.data.artifacts.forEach(artifact => {
                        const name = `EssentialsX ${artifact.displayPath.match(/EssentialsX([A-Za-z]*)/)[1]}`;
                        this.plugins[name] = {
                            main: `${mainCI}lastSuccessfulBuild/artifact/${artifact.relativePath}`,
                            mirror: mirrorCI ? `${mirrorCI}lastSuccessfulBuild/artifact/${artifact.relativePath}` : null,
                        };
                    });

                    this.failed = null;
                    this.loading = false;
                }, error => {
                    if (error.response) {
                        this.failed = error.response.data;
                    } else {
                        this.failed = error.message;
                    }
                    this.loading = false;
                }
                );
        }
    },
    mounted: function () {
        this.updateInfo();
    },
    components: {
        DownloadsTile
    }
}
</script>
