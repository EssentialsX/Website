<template>
    <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <SaberLink class="navbar-item" to="/">
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
                <SaberLink to="/wiki/Home.html" class="navbar-item">Wiki</SaberLink>
            </div>

            <div class="navbar-end">
                <a href="https://github.com/EssentialsX/Essentials" class="navbar-item">GitHub</a>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
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
    }
}
</script>
