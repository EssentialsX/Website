import Vue from "vue";
import axios from "axios";

// axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

const pluginsDefaults = {
    core: {
        name: "EssentialsX",
        description: "Core functionality: teleports, private messages, homes, warps and more",
        downloadUrl: null,
        tags: [{ text: 'REQUIRED', color: 'dark' }]
    },
    antibuild: {
        name: "EssentialsX AntiBuild",
        description: "Simple permissions-based building control",
        downloadUrl: null,
        tags: [{ text: 'OPTIONAL', color: 'light' }]
    },
    chat: {
        name: "EssentialsX Chat",
        description: "Chat formatting, local chat",
        downloadUrl: null,
        tags: [{ text: 'RECOMMENDED', color: 'info' }, { text: 'OPTIONAL', color: 'light' }]
    },
    discord: {
        name: "EssentialsX Discord",
        description: "Lightweight chat, messaging and command integration with Discord",
        downloadUrl: null,
        tags: [{ text: 'OPTIONAL', color: 'light' }, { text: 'NEW' }]
    },
    geo: {
        name: "EssentialsX Geo",
        description: "Geographical player lookup (formerly EssentialsX GeoIP)",
        downloadUrl: null,
        tags: [{ text: 'OPTIONAL', color: 'light' }]
    },
    protect: {
        name: "EssentialsX Protect",
        description: "Configurable world protection and control",
        downloadUrl: null,
        tags: [{ text: 'OPTIONAL', color: 'light' }]
    },
    spawn: {
        name: "EssentialsX Spawn",
        description: "Spawnpoint control, per-player spawns",
        downloadUrl: null,
        tags: [{ text: 'RECOMMENDED', color: 'info' }, { text: 'OPTIONAL', color: 'light' }]
    },
    xmpp: {
        name: "EssentialsX XMPP",
        description: "Lightweight chat, messaging and server log integration with Jabber/XMPP services",
        downloadUrl: null,
        tags: [{ text: 'OPTIONAL', color: 'light' }, { text: 'LEGACY', color: 'warning' }]
    }
};

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
    builds: {
        dev: {
            changelogUrl: "https://github.com/EssentialsX/Essentials/commits/2.x",
            version: null,
            build: null,
            commit: null,
            plugins: { ...pluginsDefaults },
            loading: true,
            error: null
        },
        stable: {
            changelogUrl: "https://github.com/EssentialsX/Essentials/releases",
            version: null,
            plugins: { ...pluginsDefaults },
            loading: true,
            error: null
        }
    },
    downloads: 3000000
});

export default {
    data() {
        return {
            external: state
        }
    },
    methods: {
        refreshDownloads() {
            getJenkins();
            getLatestRelease();
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
        // console.error(e);
        count += Math.round(state.downloads / 2);
    }

    try {
        response = await axios.get(`https://cf-api.essentialsx.net/`);
        count += response.data.downloads.total;
    } catch (e) {
        // console.error(e)
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
        // console.error(e);
    }

    state.discord.members = members;
}

async function getStars() {
    let stars = 800;
    let forks = 400;
    try {
        let response = await axios.get("https://api.github.com/repos/EssentialsX/Essentials");
        stars = response.data.stargazers_count;
        forks = response.data.forks_count;
    } catch (e) {
        // console.error(e);
    }

    state.github.stars = stars;
    state.github.forks = forks;
}

async function getPatrons() {
    let patrons = 10;
    let sum = 4000;

    try {
        let response = await axios.get(`https://patreon-api.essentialsx.net/`);
        patrons = response.data.data.attributes.patron_count;
        sum = response.data.data.attributes.pledge_sum;
    } catch (e) {
        // console.error(e);
    }

    state.patreon.patrons = patrons;
    state.patreon.sum = sum;
}

const mainCI = "https://ci.ender.zone/job/EssentialsX/";
const mainCIAPI = "https://ci-api.essentialsx.net/job/EssentialsX/";
const mirrorCI = "https://ci.lucko.me/job/EssentialsX/";
const moduleRegex = /EssentialsX([A-Za-z]+)/;
const versionRegex = /EssentialsX[a-zA-Z]*-([0-9\.]+?(?:-dev\+[0-9]+)?(?:-([0-9a-fA-F]+?))?)\.jar/;

function getVersionFromArtifact(name) {
    let m;

    while ((m = versionRegex.exec(name)) !== null) {
        return m[1];
    }
}

function getModuleIdFromArtifact(name) {
    let m;

    while ((m = moduleRegex.exec(name)) !== null) {
        return m[1].toLowerCase().replace("geoip", "geo");
    }

    return "core";
}

async function getJenkins() {
    try {
        state.builds.dev.loading = true;

        let response;
        let currentCI = mainCI;
        try {
            response = await axios.get(`${mainCIAPI}lastSuccessfulBuild/api/json`);
        } catch (e) {
            response = await axios.get(`${mirrorCI}lastSuccessfulBuild/api/json`);
            currentCI = mirrorCI;
        }

        state.builds.dev.build = response.data.id;
        state.builds.dev.version = getVersionFromArtifact(response.data.artifacts[0].displayPath);
        state.builds.dev.commit = response.data.changeSet.items[0].commitId;
        state.builds.dev.error = null;

        response.data.artifacts.forEach(artifact => {
            let moduleId = getModuleIdFromArtifact(artifact.displayPath);
            state.builds.dev.plugins[moduleId].downloadUrl = `${currentCI}lastSuccessfulBuild/artifact/${artifact.relativePath}`;
        });
    } catch (e) {
        state.builds.dev.error = e.response ? e.response.data : e.message;
    }
    state.builds.dev.loading = false;
}

async function getLatestRelease() {
    try {
        state.builds.stable.loading = true;
        const { data } = await axios.get('https://api.github.com/repos/EssentialsX/Essentials/releases');

        state.builds.stable.version = data[0].tag_name;
        state.builds.stable.error = null;

        data[0].assets.forEach(asset => {
            let moduleId = getModuleIdFromArtifact(asset.name);
            state.builds.stable.plugins[moduleId].downloadUrl = asset.browser_download_url;
        });
    } catch (e) {
        state.builds.stable.error = e.response ? e.response.data : e.message;
    }
    state.builds.stable.loading = false;
}

getJenkins();
getLatestRelease();
getMembers();
getPatrons();
getStars();
getDownloads();
