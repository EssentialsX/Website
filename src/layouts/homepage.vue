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
    }
}
</script>
