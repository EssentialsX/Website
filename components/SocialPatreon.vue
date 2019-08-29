<template>
    <article class="media box has-background-patreon has-text-white">
        <div class="media-content">
            <div class="content has-text-centered">
                <p>
                    Support EssentialsX on <strong class="has-text-white">Patreon</strong>
                </p>
            </div>
            <nav class="level is-mobile">
                <div class="level-item has-text-centered">
                    <div>
                        <p class="title has-text-white">{{ patrons }}</p>
                        <p class="heading">Patrons</p>
                    </div>
                </div>
                <div class="level-item has-text-centered">
                    <div>
                        <p class="title has-text-white">${{ sum }}</p>
                        <p class="heading">Per month</p>
                    </div>
                </div>
            </nav>
            <div class="content">
                <p class="has-text-right is-size-7">
                    <a class="has-text-white" href="https://patreon.com/EssentialsX">Support on Patreon...</a>
                </p>
            </div>
        </div>
    </article>
</template>

<script>
export default {
    computed: {
        patrons() {
            return this.external.patreon.patrons || "??";
        },
        sum() {
            return this.external.patreon.sum ? Math.round(this.external.patreon.sum / 100) : "??";
        }
    }
}
</script>
