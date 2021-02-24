<template>
    <div class="box">
        <div class="columns is-vcentered">
            <div class="column is-narrow">
                <p class="title is-4 no-pad-bottom">{{ name }}</p>
                <p>{{ version }}</p>
            </div>
            <div class="column">
                <div class="tags">
                    <span v-for="tag in tags" :key="tag.name" :class="tagClass(tag)">
                        <b>{{ tag.text }}</b>
                    </span>
                </div>
            </div>
            <div class="column is-narrow is-hidden-tablet">
                <p class="content">
                    {{ description }}
                </p>
            </div>
            <div class="column is-narrow">
                <b-button
                    type="is-info"
                    v-if="info"
                    tag="a"
                    :href="info">
                    More Info
                </b-button>
                <b-button
                    type="is-primary"
                    v-if="download"
                    tag="a"
                    :href="download">
                    Download
                </b-button>
            </div>
        </div>
        <div class="is-hidden-mobile">
            <div class="content download-bottom">
                {{ description }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        version: {
            type: String,
            required: true
        },
        download: {
            type: String,
            requried: false
        },
        info: {
            type: String,
            required: false
        },
        tags: {
            type: Array,
            required: false
        }
    },
    methods: {
        tagClass(tag) {
            let tagColor = tag.color || "primary";
            return {
                tag: true,
                [`is-${tagColor}`]: true
            };
        }
    }
}
</script>

<style scoped>
.no-pad-bottom {
    margin-bottom: 0;
}
</style>