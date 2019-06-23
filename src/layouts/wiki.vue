<template>
    <div>
        <Navbar />

        <div class="section">
            <div class="columns">
                <div class="column is-one-fifth">
                    <WikiMenu />
                </div>
                <div class="column">
                    <div class="container">
                        <div class="content">
                            <slot name="default" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import WikiMenu from "../components/WikiMenu.vue";

export default {
    components: {
        Navbar,
        WikiMenu
    }
}
</script>
