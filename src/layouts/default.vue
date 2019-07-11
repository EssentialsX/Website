<template>
    <div>
        <Navbar />
        <slot name="default" />
        <Footer />
    </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

export default {
    props: ['page'],
    components: {
        Navbar,
        Footer
    },
    head() {
        return {
            title: `${this.page.attributes.title} - ${this.$siteConfig.title}`
        }
    }
}
</script>
