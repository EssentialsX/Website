<template>
    <div>
        <Navbar />
        <div class="hero is-warning is-medium">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">404</h1>
                    <h2 class="subtitle">You seem lost. Either you typed in a wrong link, or the website is broken. Probably the latter.</h2>
                    <SaberLink class="button" to="/">Return to home</SaberLink>
                </div>
            </div>
        </div>
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
