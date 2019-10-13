<template>
    <footer class="footer has-background-black-ter has-text-white">
        <div class="section content">
            <p>
                <b>EssentialsX</b> by <a href="https://github.com/EssentialsX"><b>EssentialsX team</b></a>,
                based on the original plugin by <a href="https://github.com/Essentials">the Essentials team</a>.
            </p>
            <p>
                Website by <a href="https://github.com/md678685"><b>md678685</b></a>, with the help of <a href="https://github.com/EssentialsX/wiki/graphs/contributors">wiki contributors</a>.
                Built with <a href="https://saber.land">Saber</a>, <a href="https://bulma.io">Bulma</a>, <a href="https://vuejs.org">Vue</a> and <a href="https://buefy.org/">Buefy</a>.
            </p>
            <div class="box has-background-black-bis">
                <div class="field is-grouped is-grouped-multiline has-text-weight-semibold">
                    <b-tooltip class="control" multilined :label="downloadsHover + ' downloads across BukkitDev and SpigotMC'">
                        <div class="tags has-addons">
                            <a href="https://www.spigotmc.org/resources/essentialsx.9089/" class="tag is-dark">Downloads</a>
                            <a href="https://www.spigotmc.org/resources/essentialsx.9089/" class="tag is-spigot">{{ downloads }} downloads</a>
                        </div>
                    </b-tooltip>
                    <b-tooltip class="control" multilined label="View all changelogs">
                        <div class="tags has-addons">
                            <a href="https://github.com/EssentialsX/Essentials/releases" class="tag is-dark">Latest release</a>
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
                    <b-tooltip class="control" multilined label="Visit us on GitHub">
                        <div class="tags has-addons">
                            <a href="https://github.com/EssentialsX/Essentials/" class="tag is-dark">GitHub</a>
                            <a href="https://github.com/EssentialsX/Essentials/" class="tag is-black">{{ stars }} stars</a>
                        </div>
                    </b-tooltip>
                    <b-tooltip v-if="commitHash" class="control" multilined label="View the website source code">
                        <div class="tags has-addons">
                            <a :href="commitLink" class="tag is-dark">Website</a>
                            <a :href="commitLink" class="tag is-white-bis">{{ commitHash }}</a>
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
    props: ["page"],
    computed: {
        commitHash() {
            return this.$siteConfig.commitHash;
        },
        commitLink() {
            return "https://github.com/EssentialsX/Website/commit/" + this.commitHash;
        },
        downloads() {
            return this.external.downloads ? (this.external.downloads / 1000000).toFixed(2) + "m" : "1.5m";
        },
        downloadsHover() {
            return this.external.downloads ? this.external.downloads.toLocaleString("en") : "Over 1.5 million";
        },
        stars() {
            return this.external.github.stars || "400+";
        },
        buildNo() {
            return this.external.jenkins.build || "???";
        },
        members() {
            return this.external.discord.members ? (this.external.discord.members / 1000).toFixed(1) + "k" : "1k";
        },
        membersHover() {
            return this.external.discord.members || "Over 1000";
        }
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
