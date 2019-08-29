<template>
    <div>
        <div class="hero is-bold is-primary">
            <div class="hero-body has-text-centered spin">
                <h1 class="title"><img src="../images/logo-banner.png" /></h1>
                <h2 class="subtitle">The essential plugin for Spigot servers.</h2>
            </div>
            <div class="hero-foot spin">
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

<style>
@keyframes spin {
    from { transform: perspective(10cm) rotateX(0) }
    to   { transform: perspective(10cm) rotateX(360deg) }
}

.konami .spin {
    animation: spin 2.5s linear infinite;
}
</style>
