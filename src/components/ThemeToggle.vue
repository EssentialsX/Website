<template>
    <div class="tags" @click="dark = !dark">
        <div class="tag is-light">
            <fa-icon :icon="currentIcon" size="sm"></fa-icon>
        </div>
    </div>
</template>

<script>
import initPreference from "css-prefers-color-scheme";

export default {
    data() {
        return {
            schemePref: null,
            dark: false
        }
    },
    computed: {
        currentIcon() {
            return this.dark ? "moon" : "sun";
        }
    },
    mounted() {
        this.schemePref = initPreference();
        this.dark = this.schemePref.scheme === "dark";
    },
    watch: {
        dark(to) {
            this.schemePref.scheme = to ? "dark" : "light";
        }
    }
}
</script>
