exports.onCreatePage = function(page) {
    if (page.internal.relative.includes("wiki/")) {
        page.attributes.layout = "wiki";
        page.attributes.title = page.attributes.slug.replace("wiki/", "").replace("-", " ");
    }

    if (page.attributes.layout === undefined) {
        page.attributes.layout = "default";
    }
}
