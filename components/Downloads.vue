<template>
    <div>
        <div class="content">
            <div class="message is-info">
                <div class="message-body">
                    <p>
                        EssentialsX officially supports the <b>CraftBukkit</b>, <b>Spigot</b> and <a href="https://papermc.io/"><b>Paper (recommended)</b></a> server software running the following Minecraft versions:
                    </p>            
                    <ul>
                        <li>✅ <b>1.16.5</b> - EssentialsX actively develops against and supports these versions.</li>
                        <li>⚠️ <b>1.8.8</b>, <b>1.9.4</b>, <b>1.10.2</b>, <b>1.11.2</b>, <b>1.12.2</b>, <b>1.13.2</b>, <b>1.14.4</b> and <b>1.15.2</b> - these versions are still supported, but are not a priority for us, and may be dropped in a future release.</li>
                    </ul>
                    <p>
                        <b>We strongly recommend using the latest version of Paper.</b> Paper includes countless bug fixes and performance improvements over Spigot and CraftBukkit, including fixing some non-vanilla behaviours, and EssentialsX takes advantage of more efficient <b>async teleports</b> and support for modern gameplay features which are only possible on Paper, not Spigot.
                    </p>
                </div>
            </div>
            
            <div class="message is-danger">
                <div class="message-body">
                    <p>
                        EssentialsX <b>does not support</b> the following Minecraft versions and server software:
                    </p>
                    <ul>
                        <li>🛑 <b>Do not use Akarin, Yatopia, Mohist or Magma as your server software.</b> These servers include <b>dangerous non-standard behaviour</b>, which can not only impact EssentialsX's functionality but also cause damage to your worlds.</li>
                        <li>🛑 <b>Any Forge/Fabric hybrid server software</b>, including <b>Cauldron</b>, <b>Thermos</b>, <b>CatServer</b>, <b>Mohist</b> and <b>Magma</b> - the Bukkit API does not properly support mods, and using Bukkit plugins on modded Forge/Fabric servers will cause significant problems.<br />For Forge servers, use <b><a href="https://www.spongepowered.org/downloads/spongeforge">SpongeForge</a></b> with <b><a href=https://nucleuspowered.org/>Nucleus</a></b> for plugin support and a complete Essentials replacement, or consider a mod designed for Forge such as <a href="https://www.curseforge.com/minecraft/mc-mods/ftb-essentials"><b>FTB Essentials</b></a>.</li>
                        <li>🛑 <b>1.7.10 or below</b> - you should use the original <a href="https://dev.bukkit.org/projects/essentials">Essentials</a>.</li>
                    </ul>
                    <p>
                        We will not be able to provide support if you use any of the software or versions listed above.
                    </p>
                </div>
            </div>

            <p v-if="loading">
                <i>Currently loading downloads, please wait...</i>
                <progress class="progress is-primary" max="100">50%</progress>
            </p>
            <p v-if="version && !loading">
                The latest version of EssentialsX is <b>{{version}}</b> (build {{build}}, commit <a :href='commitLink'>{{commit}}</a>).
                You can see recent changes <a href="https://github.com/EssentialsX/Essentials/commits/2.x">here</a>.
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
                name="EssentialsX Core"
                description="Core functionality: teleports, private messages, homes, warps and more"
                :version="version"
                :download="plugins['EssentialsX '].main"
                :tags="[{ text: 'REQUIRED', color: 'dark' }]"
            />

            <h1 class="title is-4">Recommended add-ons</h1>

            <downloads-item
                name="EssentialsX Chat"
                description="Chat formatting, local chat"
                :version="version"
                :download="plugins['EssentialsX Chat'].main"
                :tags="[{ text: 'OPTIONAL', color: 'light' }, { text: 'RECOMMENDED', color: 'info' }]"
            />
            <downloads-item
                name="EssentialsX Spawn"
                description="Spawnpoint control, per-player spawns"
                :version="version"
                :download="plugins['EssentialsX Spawn'].main"
                :tags="[{ text: 'OPTIONAL', color: 'light' }, { text: 'RECOMMENDED', color: 'info' }]"
            />

            <h1 class="title is-4">Other add-ons</h1>

            <downloads-item
                name="EssentialsX AntiBuild"
                description="Simple permissions-based building control"
                :version="version"
                :download="plugins['EssentialsX AntiBuild'].main"
                :tags="[{ text: 'OPTIONAL', color: 'light' }]"
            />
            <downloads-item
                v-if="!!plugins['EssentialsX Discord']"
                name="EssentialsX Discord"
                description="Simple bridge between Minecraft and Discord servers"
                :version="version"
                :download="plugins['EssentialsX Discord'].main"
                :tags="[{ text: 'OPTIONAL', color: 'light' }, { text: 'NEW' }]"
            />
            <downloads-item
                name="EssentialsX Geo"
                description="Geographical player lookup (formerly EssentialsX GeoIP)"
                :version="version"
                :download="plugins['EssentialsX GeoIP'].main"
                :tags="[{ text: 'OPTIONAL', color: 'light' }]"
            />
            <downloads-item
                name="EssentialsX Protect"
                description="Configurable world protection and control"
                :version="version"
                :download="plugins['EssentialsX Protect'].main"
                :tags="[{ text: 'OPTIONAL', color: 'light' }]"
            />
            <downloads-item
                name="EssentialsX XMPP"
                description="Lightweight chat, messaging and server log integration with Jabber/XMPP services"
                :version="version"
                :download="plugins['EssentialsX XMPP'].main"
                :tags="[{ text: 'OPTIONAL', color: 'light' }, { text: 'LEGACY', color: 'warning' }]"
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
