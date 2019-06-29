<template>
    <a :class="tileClass" :href="url">
        <p :class="titleClass">
            <b-icon icon="download"></b-icon>
            {{ text }}
        </p>
        <p class="subtitle">{{ version }}</p>
        <p v-if="description">{{ description }}</p>
    </a>
</template>

<script>
export default {
    props: {
        bold: {
            type: Boolean,
            default: false
        },
        text: {
            type: String,
            default: "unknown project"
        },
        description: {
            type: String,
            default: undefined
        },
        version: {
            type: String,
            default: "unknown version"
        },
        url: {
            type: String,
            default: "#"
        }
    },
    computed: {
        tileClass() {
            return {
                "tile": true,
                "is-child": true,
                "box": true,
                "hero": true,
                "is-primary": true,
                "has-text-centered": true,
                "is-bold": this.bold
            }
        },
        titleClass() {
            return {
                "title": true,
                "is-5": !this.bold
            };
        }
    }
}
</script>

<style>
.tile.box.hero {
    justify-content: center
}
</style>
