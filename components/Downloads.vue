<template>
    <section class="section">
        <h1 class="title">Download EssentialsX</h1>
        <div class="box">
            <p class="tip">
                Not sure what the different jars do? See the <SaberLink to="/wiki/Downloading-EssentialsX.html">downloads guide</SaberLink>.
            </p>
            <p v-if="loading">
                <b-icon icon="sync" custom-class="fa-spin" size="is-small"></b-icon>
                <i>Currently loading downloads, please wait...</i>
            </p>
            <p v-if="buildNo">The latest version of EssentialsX is <b>{{build}}</b>.</p>
        </div>
        <b-notification type="is-danger" v-if="failed">
            <p>
                Could not retrieve information about the latest version.
                Click <a href="https://ci.ender.zone/job/EssentialsX">here</a> to view builds on Jenkins.
            </p>
        </b-notification>
        <table v-if="buildNo" class="table">
            <tr>
                <th>Plugin</th>
                <th>Download</th>
            </tr>
            <tr v-for="plugin in plugins" :key="plugin.name">
                <td>{{ plugin.name }}</td>
                <td>
                    <a :href="plugin.main" class="button is-primary">
                        <b-icon icon="download" size="is-small"></b-icon>
                        <span>Official</span>
                    </a>
                    <a v-if="plugin.mirror" :href="plugin.mirror" class="button">
                        <b-icon icon="download" size="is-small"></b-icon>
                        <span>Mirror</span>
                    </a>
                </td>
            </tr>
        </table>
        <button v-if="!loading" @click="updateInfo" class="button">
            <span>Refresh</span>
        </button>
    </section>
</template>

<script>
import axios from "axios";

const mainCI = "https://ci.ender.zone/job/EssentialsX/";
const mirrorCI = null; // "https://ci.akpmakes.tech/job/EssentialsX/";
const corsAnywhere = "https://cors-anywhere.herokuapp.com/";

axios.defaults.baseURL = corsAnywhere + mainCI;

const versionRegex = /EssentialsX[a-zA-Z]*-([0-9\.]+?)\.jar/;

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
            plugins: [],
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
                    this.plugins = response.data.artifacts.map(artifact => {
                        return {
                            name: `EssentialsX ${artifact.displayPath.match(/EssentialsX([A-Za-z]*)/)[1]}`,
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
    }
}
</script>
