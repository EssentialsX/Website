<template>
    <footer class="footer has-background-black-ter has-text-white">
        <div class="section content">
            <p>
                <b>EssentialsX</b> by <a href="https://github.com/EssentialsX"><b>EssentialsX team</b></a>,
                based on the original plugin by <a href="https://github.com/Essentials">the Essentials team</a>.
            </p>
            <p>
                Website by <a href="https://github.com/md678685"><b>md678685</b></a>, with the help of wiki contributors.
            </p>
            <div class="box has-background-black-bis">
                <div class="field is-grouped is-grouped-multi has-text-weight-semibold">
                    <b-tooltip class="control" multilined :label="downloadsHover + ' downloads across BukkitDev and SpigotMC'">
                        <div class="tags has-addons">
                            <a href="https://www.spigotmc.org/resources/essentialsx.9089/" class="tag is-dark">Downloads</a>
                            <a href="https://www.spigotmc.org/resources/essentialsx.9089/" class="tag is-spigot">{{ downloads }} downloads</a>
                        </div>
                    </b-tooltip>
                    <b-tooltip class="control" multilined label="Visit us on GitHub">
                        <div class="tags has-addons">
                            <a href="https://github.com/EssentialsX/Essentials/" class="tag is-dark">GitHub</a>
                            <a href="https://github.com/EssentialsX/Essentials/" class="tag is-black">{{ stars }} stars</a>
                        </div>
                    </b-tooltip>
                    <b-tooltip class="control" multilined label="View all changelogs">
                        <div class="tags has-addons">
                            <a href="https://github.com/EssentialsX/Essentials/releases" class="tag is-dark">Release</a>
                            <a href="https://github.com/EssentialsX/Essentials/releases" class="tag is-primary">2.17.0</a>
                        </div>
                    </b-tooltip>
                    <b-tooltip class="control" multilined label="Visit the build server">
                        <div class="tags has-addons">
                            <a href="https://ci.ender.zone/job/EssentialsX" class="tag is-dark">Jenkins</a>
                            <a href="https://ci.ender.zone/job/EssentialsX" class="tag is-success">b{{ buildNo }}</a>
                        </div>
                    </b-tooltip>
                    <b-tooltip class="control" multilined :label="membersHover + ' people chatting on Discord'">
                        <div class="tags has-addons">
                            <a href="https://discord.gg/h8CnPSw" class="tag is-dark">Discord</a>
                            <a href="https://discord.gg/h8CnPSw" class="tag is-discord">{{ members }} online</a>
                        </div>
                    </b-tooltip>
                </div>
            </div>
        </div>
        <div class="section hide-until-code">
            <a class="button is-info" href="https://tcrf.net/Dreamcast#Hidden_Alternate_Menu">???</a>
        </div>
    </footer>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            downloads: "744k",
            downloadsHover: "Over 1.5 million",
            stars: "400+",
            buildNo: "???",
            members: "1000+",
            membersHover: "Over 1000"
        }
    },
    methods: {
        update() {
            getDownloads().then(count => {
                this.downloadsHover = count.toLocaleString("en");
                this.downloads = (count / 1000000).toFixed(2) + "m";
            });

            getMembers().then(count => {
                this.membersHover = count.toLocaleString("en");
                this.members = (count / 1000).toFixed(1) + "k";
            });

            getStars().then(count => this.stars = count);

            getBuildNo().then(buildNo => this.buildNo = buildNo);
        }
    },
    mounted() {
        this.update();
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
        count += 740000;
    }

    try {
        response = await axios.get("https://api.cfwidget.com/minecraft/bukkit-plugins/essentialsx/");
        count += response.data.downloads.total;
    } catch (e) {
        console.error(e)
        count += 780000;
    }

    return count;
}

async function getMembers() {
    try {
        let response = await axios.get("https://canary.discordapp.com/api/guilds/390942438061113344/widget.json");
        return response.data.members.length;
    } catch (e) {
        console.error(e)
        return 1000;
    }
}

async function getStars() {
    try {
        let response = await axios.get("https://api.github.com/repos/EssentialsX/Essentials");
        console.log(response.data);
        return response.data.stargazers_count;
    } catch (e) {
        console.error(e)
        return 402;
    }
}

async function getBuildNo() {
    try {
        let response = await axios.get("https://cors-anywhere.herokuapp.com/https://ci.ender.zone/job/EssentialsX/lastSuccessfulBuild/api/json");
        return response.data.id;
    } catch (e) {
        console.error(e);
        return "???";
    }
}

</script>


<style>
.hide-until-code {
    display: none;
}

.konami .hide-until-code {
    display: initial;
}
</style>
