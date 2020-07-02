const wikilinkPlugin = require("@gerhobbelt/markdown-it-wikilinks")({
    baseURL: "/wiki/",
    makeAllLinksAbsolute: true
});

exports.chainMarkdown = function(config) {
    config.plugin('wikilinks').use(wikilinkPlugin);
    return config;
}