<template>
    <div>
        <div class="hero is-bold is-dark is-fullheight">
            <div class="hero-body">
                <div class="container box has-background-primary has-text-centered box-title">
                    <h1 class="title"><img src="../images/logo-banner.png" /></h1>
                    <h2 class="subtitle">The essential plugin for Spigot servers.</h2>
                </div>
            </div>
            <div class="hero-foot">
                <Navbar :hero="true" />
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

<style scoped>
.box.box-title {
    max-width: 720px;
}
</style>
