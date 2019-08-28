<template>
    <article class="media box has-background-patreon has-text-white">
        <div class="media-content">
            <div class="content has-text-centered">
                <p>
                    <strong class="has-text-white">EssentialsX Team</strong> is creating EssentialsX
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
// https://api.patreon.com/campaigns/1395802
import axios from "axios";

export default {
    data() {
        return {
            patronCount: -1,
            pledgeSum: -1
        }
    },
    computed: {
        patrons() {
            return this.patronCount < 0 ? "??" : this.patronCount;
        },
        sum() {
            return this.pledgeSum < 0 ? "??" : this.pledgeSum;
        }
    }
}
</script>
