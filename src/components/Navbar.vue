<template>
    <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <SaberLink class="navbar-item" to="/" v-if="!hero">
                <b>{{ $siteConfig.title }}</b>
            </SaberLink>

            <a role="button" :class="burgerClass" @click="expanded = !expanded" aria-label="menu" aria-expanded="false" data-target="navbar-main">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbar-main" :class="mainClass">
            <div class="navbar-start">
                <!-- <SaberLink to="/wiki/Downloading-EssentialsX.html" class="navbar-item" v-if="!hero">Wiki</SaberLink> -->
            </div>

            <div class="navbar-end has-text-centered-touch">
                <SaberLink to="/community.html" class="navbar-item">Community</SaberLink>
                <SaberLink to="/downloads.html" class="navbar-item">Downloads</SaberLink>
                <SaberLink to="/wiki/Home.html" class="navbar-item">Wiki</SaberLink>

                <div class="navbar-item">
                    <a href="https://www.patreon.com/essentialsx" :class="buttonClass('is-patreon')">
                        <b-icon pack="fab" icon="patreon" size="is-small"></b-icon>
                        <span>Patreon</span>
                    </a>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    props: {
        hero: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            expanded: false,
        };
    },
    computed: {
        burgerClass() {
            return {
                "navbar-burger": true,
                "burger": true,
                "is-active": this.expanded
            };
        },
        mainClass() {
            return {
                "navbar-menu": true,
                "is-active": this.expanded
            };
        }
    },
    methods: {
        buttonClass(colour) {
            return {
                button: true,
                [colour]: !this.hero,
                "is-white": this.hero,
                "is-outlined": this.hero,
            }
        }
    }
}
</script>
