<template>
    <div>
        <Navbar />
        <div class="hero is-primary">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">{{ heroTitle }}</h1>
                    <h2 class="subtitle">{{ heroSubtitle }}</h2>
                </div>
            </div>
        </div>
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
    },
    computed: {
        heroTitle() {
            return this.page.attributes.heroTitle || this.page.attributes.title;
        },
        heroSubtitle() {
            return this.page.attributes.heroSubtitle || this.page.attributes.subtitle;
        }
    }
}
</script>
