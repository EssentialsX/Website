const ID = "essentialsx-wikilinks";

module.exports = {
    name: ID,
    apply: async (api, options) => {
        const wikilinksPlugin = (await import("@essentialsx/markdown-it-wikilinks")).default;
        console.log(wikilinksPlugin)

        api.hooks.chainMarkdown.tap(ID, config => {
            console.log("markdown tap")
            config.plugin(ID).use(wikilinksPlugin, [{
                baseURL: "/wiki/"
            }]);
        });
    }
};
