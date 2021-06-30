const ID = "essentialsx-wikilinks";

module.exports = {
    name: ID,
    apply: async (api, options) => {
        const wikilinksPlugin = (await import("@essentialsx/markdown-it-wikilinks/dist/markdownItWikiLinks.js")).default;

        api.hooks.chainMarkdown.tap(ID, config => {
            config.plugin(ID).use(wikilinksPlugin, [{
                baseURL: "/wiki/",
                linkPattern: /\[\[([-.\w\s\/]+)(\|([-.\w\s\/]+))?\]\]/
            }]);
        });
    }
};
