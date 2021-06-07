<template>
    <div>
        <div class="hero is-primary">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">Download EssentialsX</h1>
                    <h2 class="subtitle">Get bleeding edge builds of EssentialsX and add-ons, including the latest features and bug fixes.</h2>
                </div>
            </div>
        </div>
        <div class="section">
            <div class="container">
                <b-notification type="is-danger">
                    <p>
                        <b>PSA: Do not use Mohist. It includes dangerous and potentially malicious behaviour.</b>
                        <saber-link to="/do-not-use-mohist.html">Click here for more information.</saber-link>
                    </p>
                </b-notification>
                <b-notification type="is-patreon">
                    <p>
                        EssentialsX is developed by volunteers in our free time.
                        If you'd like to support the development of EssentialsX, please consider supporting us on <a href="https://www.patreon.com/essentialsx" target="_blank">Patreon</a>, <a href="https://github.com/sponsors/EssentialsX/" target="_blank">GitHub Sponsors</a> or <a href="https://ko-fi.com/essentialsx" target="_blank">Ko-fi</a>.
                    </p>
                </b-notification>
                <ClientOnly>
                    <Downloads
                        :startBranch="startBranch"
                        class="squish"
                    />
                </ClientOnly>
            </div>
        </div>
    </div>
</template>

<script>
import Downloads from "../components/Downloads.vue";

export const attributes = {
    title: "Downloads"
};

export default {
    data() {
        console.log(this.$route.query)
        return {
            startBranch: this.$route.query.branch || "dev"
        };
    },
    components: {
        Downloads
    }
};
</script>

<style>
@keyframes squishA {
    from { transform: scaleX(1) rotate(-2deg) }
    to   { transform: scaleX(0.4) rotate(2deg) }
}

@keyframes squishB {
    from { margin-left: -20%; margin-right: 20%; }
    to   { margin-left: 20%; margin-right: -20%; }
}

.konami .squish {
    animation: squishA 2.7s ease-in alternate-reverse infinite,
               squishB 2.2s ease alternate-reverse infinite;
}
</style>
