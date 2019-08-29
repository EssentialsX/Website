<template>
    <article class="media box has-background-discord has-text-white">
        <div class="media-content">
            <div class="content has-text-centered">
                <p>
                    EssentialsX is part of <strong class="has-text-white">MOSS on Discord</strong>
                </p>
            </div>
            <nav class="level is-mobile">
                <div class="level-item has-text-centered">
                    <div>
                        <p class="title has-text-white">{{ members }}</p>
                        <p class="heading">Members</p>
                    </div>
                </div>
            </nav>
            <div class="content">
                <p class="has-text-right is-size-7">
                    <a class="has-text-white" href="https://discord.gg/h8CnPSw">Join on Discord...</a>
                </p>
            </div>
        </div>
    </article>
</template>

<script>
export default {
    computed: {
        members() {
            return this.external.discord.members || "1000+";
        }
    }
}
</script>
