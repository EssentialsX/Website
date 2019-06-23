<template>
    <aside class="menu box tilt">
        <h2 class="subtitle">Pages</h2>
        <template v-for="(contents, title) in $themeConfig.wikiSidebar">
            <p class="menu-label" :key="title + '_label'">{{ title }}</p>
            <ul class="menu-list" :key="title + '_list'">
                <li v-for="item in contents" :key="item.label">
                    <SaberLink v-if="item.link" :to="item.link" :class="linkClass(item.link)">{{ item.label }}</SaberLink>
                    <a v-else-if="item.href" :href="item.href" target="_blank">
                        {{ item.label }}
                    </a>
                    <ul v-if="item.children">
                        <li v-for="subitem in item.children" :key="subitem.label">
                            <SaberLink v-if="subitem.link" :to="subitem.link" :class="linkClass(subitem.link)">{{ subitem.label }}</SaberLink>
                        </li>
                    </ul>
                </li>
            </ul>
        </template>
    </aside>
</template>

<script>
export default {
    methods: {
        linkClass(link) {
            return {
                "is-active": this.$route.path.includes(link),
            };
        }
    }
}
</script>

<style>
.konami .tilt {
    transform: perspective(1000px) rotateY(15deg);
}

.tilt {
    transition: ease 1s transform;
}
</style>
