import Vue from "vue";
import axios from "axios";

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

const corsAnywhere = "https://cors-anywhere.herokuapp.com/";

const state = Vue.observable({
    github: {
        stars: null,
        forks: null,
    },
    patreon: {
        patrons: null,
        sum: null,
    },
    discord: {
        members: null,
    },
    jenkins: {
        build: null,
        version: null,
        error: null,
        loading: false,
        plugins: {
            "EssentialsX ": {},
            "EssentialsX AntiBuild": {},
            "EssentialsX Chat": {},
            "EssentialsX GeoIP": {},
            "EssentialsX Protect": {},
            "EssentialsX Spawn": {},
            "EssentialsX XMPP": {},
        }
    },
    downloads: 1644000
});

export default {
    data() {
        return {
            external: state
        }
    },
    methods: {
        refreshJenkins() {
            getJenkins();
        }
    }
}

async function getDownloads() {
    let response;
    let count = 0;
    try {
        response = await axios.get("https://api.spiget.org/v2/resources/9089");
        count += response.data.downloads;
    } catch (e) {
        console.error(e);
        count += Math.round(state.downloads / 2);
    }

    try {
        response = await axios.get("https://api.cfwidget.com/minecraft/bukkit-plugins/essentialsx/");
        count += response.data.downloads.total;
    } catch (e) {
        console.error(e)
        count += Math.round(state.downloads / 2)
    }

    state.downloads = count;
}

async function getMembers() {
    let members = 1000;
    try {
        let response = await axios.get("https://canary.discordapp.com/api/guilds/390942438061113344/widget.json");
        members = response.data.presence_count;
    } catch (e) {
        console.error(e);
    }

    state.discord.members = members;
}

async function getStars() {
    let stars = 440;
    let forks = 400;
    try {
        let response = await axios.get("https://api.github.com/repos/EssentialsX/Essentials");
        stars = response.data.stargazers_count;
        forks = response.data.forks_count;
    } catch (e) {
        console.error(e);
    }

    state.github.stars = stars;
    state.github.forks = forks;
}

async function getPatrons() {
    let patrons = 10;
    let sum = 4000;

    try {
        let response = await axios.get(`${corsAnywhere}https://api.patreon.com/campaigns/1395802`);
        patrons = response.data.data.attributes.patron_count;
        sum = response.data.data.attributes.pledge_sum;
    } catch (e) {
        console.error(e);
    }

    state.patreon.patrons = patrons;
    state.patreon.sum = sum;
}

const mainCI = "https://ci.ender.zone/job/EssentialsX/";
const mirrorCI = null; // "https://ci.akpmakes.tech/job/EssentialsX/";
const versionRegex = /EssentialsX[a-zA-Z]*-([0-9\.pre-]+?)\.jar/;

function getVersionFromArtifact(name) {
    let m;

    while ((m = versionRegex.exec(name)) !== null) {
        return m[1];
    }
}

async function getJenkins() {
    try {
        state.jenkins.loading = true;
        let response = await axios.get(`${corsAnywhere}${mainCI}lastSuccessfulBuild/api/json`)
        state.jenkins.build = response.data.id;
        state.jenkins.version = getVersionFromArtifact(response.data.artifacts[0].displayPath);;
        response.data.artifacts.forEach(artifact => {
            const name = `EssentialsX ${artifact.displayPath.match(/EssentialsX([A-Za-z]*)/)[1]}`;
            state.jenkins.plugins[name] = {
                main: `${mainCI}lastSuccessfulBuild/artifact/${artifact.relativePath}`,
                mirror: mirrorCI ? `${mirrorCI}lastSuccessfulBuild/artifact/${artifact.relativePath}` : null,
            };
        });

        state.jenkins.error = null;
    } catch (e) {
        console.error(e);
        state.jenkins.error = e.response ? e.response.data : e.message;
    }
    state.jenkins.loading = false;
}

getJenkins()
    .then(getMembers)
    .then(getPatrons)
    .then(getStars)
    .then(getDownloads);
