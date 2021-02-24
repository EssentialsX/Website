<template>
    <div class="box">
        <div class="level download-top">
            <div class="level-left">
                <div class="level-item">
                    <p class="title is-4">{{ name }}</p>
                </div>
                <div class="level-item">
                    <p class="is-size-5">{{ version }}</p>
                </div>
                <div class="level-item is-hidden-tablet">
                    <p class="content">
                        {{ description }}
                    </p>
                </div>
                <div class="tags">
                    <span v-for="tag in tags" :key="tag.name" :class="tagClass(tag)">
                        <b>{{ tag.text }}</b>
                    </span>
                </div>
            </div>
            <div class="level-right">
                <div class="level-item">
                    <b-button
                        type="is-info"
                        v-if="info"
                        tag="a"
                        :href="info">
                        More Info
                    </b-button>
                </div>
                <div class="level-item">
                    <b-button
                        type="is-primary"
                        v-if="download"
                        tag="a"
                        :href="download">
                        Download
                    </b-button>
                </div>
            </div>
        </div>
        <div class="level is-hidden-mobile">
            <div class="level-left">
                <div class="level-item">
                    <div class="content download-bottom">
                        {{ description }}
                    </div>
                </div>
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
.download-top {
    margin-bottom: 0;
}
</style>