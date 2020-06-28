<template>
    <div v-if="!isDarkReader" class="tags" @click="dark = !dark">
        <div class="tag is-light">
            <fa-icon :icon="currentIcon" size="sm"></fa-icon>
        </div>
    </div>
</template>

<script>
import initPreference from "css-prefers-color-scheme";
let schemePref = { scheme: "light" };

function isDarkReader() {
    if (!process.browser) {
        return null;
    }
    return document.head.getElementsByClassName("darkreader").length > 0;
}

console.log(process.browser, isDarkReader())

if (process.browser && !isDarkReader()) {
    schemePref = initPreference();
}

export default {
    data() {
        return {
            dark: schemePref.scheme === "dark"
        }
    },
    computed: {
        currentIcon() {
            return this.dark ? "moon" : "sun";
        },
        isDarkReader() {
            return isDarkReader();
        }
    },
    watch: {
        dark(to) {
            schemePref.scheme = to ? "dark" : "light";
        }
    }
}
</script>
