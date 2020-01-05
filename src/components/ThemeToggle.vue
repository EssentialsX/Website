<template>
    <div class="tags" @click="dark = !dark">
        <div class="tag is-light">
            <fa-icon :icon="currentIcon"></fa-icon>
        </div>
    </div>
</template>

<script>
import initPreference from "css-prefers-color-scheme";
const schemePref = (!!window) ? initPreference() : { scheme: "light" };

export default {
    data() {
        return {
            dark: schemePref.scheme === "dark"
        }
    },
    computed: {
        currentIcon() {
            return this.dark ? "moon" : "sun";
        }
    },
    watch: {
        dark(to) {
            console.log(schemePref);
            schemePref.scheme = to ? "dark" : "light";
        }
    }
}
</script>
