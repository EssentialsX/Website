<template>
    <div>
        <slot name="default" />
        <Footer />
    </div>
</template>

<script>
import Footer from "../components/Footer.vue";

export default {
    components: {
        Footer
    },
    head() {
        return {
            title: `${this.$siteConfig.title}`
        }
    }
}
</script>
