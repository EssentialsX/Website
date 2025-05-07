<template>
    <div>
        <Navbar :hero="true" />
        <div class="hero is-primary is-bold is-medium">
            <div class="hero-body has-text-centered spin">
                <h1 class="title is-1">It's in the name.</h1>
                <p>EssentialsX is the essential plugin suite for Minecraft servers, with over 130 commands for servers of all size and scale.</p>
            </div>
        </div>
        <div class="section content">
            <div class="container">
                <div class="tile is-ancestor is-vertical">
                    <div class="tile is-parent row">
                        <div class="tile is-child is-3 has-text-centered icon-container">
                            <fa-icon icon="tools" size="8x" fixed-width />
                        </div>
                        <div class="tile is-child">
                            <h2>All you can eat, and then some.</h2>
                            <p>With over <a href="https://essinfo.xeya.me/commands.html">130 commands</a>, EssentialsX provides one of the most comprehensive feature sets out there, providing teleportation, moderation tools, gameplay enhancements and more.</p>
                            <p>Just want the homes and warps? Great. Need a sign shop? Done. Want complex and rich kits with enchantments, custom books and lore? Sorted.</p>
                            <p>Whether you're a small group of friends or a huge server with hundreds of players, we've got the basics covered.</p>
                            <saber-link class="button is-primary is-rounded" to="/wiki/Home.html">Visit the wiki</saber-link>
                        </div>
                    </div>
                    <div class="tile is-parent row">
                        <div class="tile is-child is-3 has-text-centered icon-container">
                            <fa-icon icon="users" size="8x" fixed-width />
                        </div>
                        <div class="tile is-child">
                            <h2>Free, for everyone, forever.</h2>
                            <p>Developed by the community as an open source project for over 8 years, EssentialsX is completely free to use - as in free beer <i>and</i> free speech.</p>
                            <p>We're supported through community donations on <a href="https://patreon.com/essentialsx">our Patreon page</a>. No corporate sponsors, no intrusive advertisments, no paywalls.</p>
                            <p>Not only is EssentialsX free, but the source code is available for anyone to modify and improve, and we accept improvements to code on <a href="https://github.com/EssentialsX/Essentials">GitHub</a> and new translations on <a href="https://crowdin.com/project/essentialsx-official">Crowdin</a>.</p>
                            <saber-link class="button is-primary is-rounded" to="/community.html">Join the community</saber-link>
                        </div>
                    </div>
                    <div class="tile is-parent row">
                        <div class="tile is-child is-3 has-text-centered icon-container">
                            <fa-icon icon="check-circle" size="8x" fixed-width />
                        </div>
                        <div class="tile is-child">
                            <h2>Compatible with just about <i>everything</i>.</h2>
                            <p>Built for the Paper and Spigot platforms with compatibility in mind, EssentialsX works seamlessly alongside thousands of other plugins.</p>
                            <p>Plus, many plugins hook into EssentialsX's various features like economy, ignores, mutes and vanish through our API.</p>
                            <p>With support for the latest rich text features, you can customise EssentialsX to your liking, with clickable links, hover text and RGB colours!</p>
                            <saber-link class="button is-primary is-rounded" to="/wiki/Installing-EssentialsX.html">Get started with EssentialsX</saber-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from "../src/components/Navbar.vue";

export default {
    components: {
        Navbar
    }
};

export const attributes = {
    layout: "homepage"
};
</script>

<style>
@keyframes spin {
    from { transform: perspective(10cm) rotateX(0) }
    to   { transform: perspective(10cm) rotateX(360deg) }
}

.konami .spin {
    animation: spin 2.5s linear infinite;
}

div.tile.row {
    padding-bottom: 2rem;
}

div.tile.icon-container {
    padding: 3.5rem 1rem 2rem;
}
</style>
