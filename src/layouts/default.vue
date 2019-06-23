<template>
    <div>
        <Navbar />
        <slot name="default" />
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'

export default {
    components: {
        Navbar
    }
}
</script>
