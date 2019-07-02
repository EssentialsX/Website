<template>
    <nav class="navbar" :class="{ 'is-primary': !hero, 'is-dark': hero }" role="navigation" aria-label="main navigation">
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

            <div class="navbar-end">
                <SaberLink to="/wiki/Downloading-EssentialsX.html" class="navbar-item">Wiki</SaberLink>
                <div class="navbar-item">
                    <a href="https://github.com/EssentialsX/Essentials" :class="buttonClass('is-discord')">
                        <b-icon pack="fab" icon="discord"></b-icon>
                        <span>Discord</span>
                    </a>
                </div>
                <div class="navbar-item">
                    <a href="https://github.com/EssentialsX/Essentials" :class="buttonClass('is-dark')">
                        <b-icon pack="fab" icon="github"></b-icon>
                        <span>GitHub</span>
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
                "is-outlined": this.hero
            }
        }
    }
}
</script>
