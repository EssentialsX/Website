<template>
    <div>
        <div class="hero is-primary">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title"><img src="../images/essx-logo-big.png" /></h1>
                    <h2 class="subtitle">The essential plugin for Spigot servers.</h2>
                </div>
            </div>
        </div>
        <div class="section">
            <div class="container">
                <ClientOnly>
                    <Downloads></Downloads>
                </ClientOnly>
            </div>
        </div>
    </div>
</template>

<script>
import Downloads from "../components/Downloads.vue";

export default {
    layout: "page",
    components: {
        Downloads
    }
};
</script>
