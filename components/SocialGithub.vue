<template>
    <article class="media box has-background-dark has-text-white">
        <div class="media-content">
            <div class="content has-text-centered">
                <p>
                    EssentialsX is <strong class="has-text-white">open source</strong>
                </p>
            </div>
            <nav class="level is-mobile">
                <div class="level-item has-text-centered">
                    <div>
                        <p class="title has-text-white">{{ stars }}</p>
                        <p class="heading">stars</p>
                    </div>
                </div>
                <div class="level-item has-text-centered">
                    <div>
                        <p class="title has-text-white">{{ forks }}</p>
                        <p class="heading">forks</p>
                    </div>
                </div>
            </nav>
            <div class="content">
                <p class="has-text-right is-size-7">
                    <a class="has-text-white" href="https://github.com/EssentialsX/Essentials">Visit on GitHub...</a>
                </p>
            </div>
        </div>
    </article>
</template>

<script>
export default {
    computed: {
        stars() {
            return this.external.github.stars || "???";
        },
        forks() {
            return this.external.github.forks || "???";
        }
    }
}
</script>
