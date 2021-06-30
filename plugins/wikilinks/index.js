const ID = "essentialsx-wikilinks";

module.exports = {
    name: ID,
    apply: async (api, options) => {
        const wikilinksPlugin = (await import("@essentialsx/markdown-it-wikilinks")).default;

        api.hooks.chainMarkdown.tap(ID, config => {
            config.plugin(ID).use(wikilinksPlugin, [{
                baseURL: "/wiki/"
            }]);
        });
    }
};
