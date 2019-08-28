<template>
    <div>
        <Navbar />
            <div class="section">
                <div class="container">
                    <div class="content">
                        <slot name="default" />
                    </div>
                </div>
            </div>
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
