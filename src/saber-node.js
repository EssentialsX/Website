exports.onCreatePage = function(page) {
    if (page.internal.relative.includes("wiki/")) {
        page.attributes.layout = "wiki";
    }

    if (page.attributes.layout === undefined) {
        page.attributes.layout = "default";
    }
}
