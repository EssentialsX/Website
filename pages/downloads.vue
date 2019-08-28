<template>
    <div>
        <div class="hero is-primary">
            <div class="hero-body">
                <h1 class="title">Download EssentialsX</h1>
                <h2 class="subtitle">Get bleeding edge builds of EssentialsX and add-ons.</h2>
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

export const attributes = {
    title: "Downloads"
};

export default {
    components: {
        Downloads
    }
};
</script>
