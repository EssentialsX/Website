exports.onCreatePage = function(page) {
    if (page.internal.relative.includes("wiki/")) {
        page.layout = "wiki";
        page.title = page.slug.replace("wiki/", "").replace("-", " ");
    }

    if (!page.layout) {
        page.layout = "default";
    }

    console.log(page.slug, page.layout);
}

exports.chainMarkdown = function(config) {
    config.plugin('wikilinks').use(require("@tomleesm/markdown-it-wikilinks")({
        baseURL: "/wiki/",
        makeAllLinksAbsolute: true
    }));
    return config;
}
