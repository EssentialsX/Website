const redirects = [
    {
        fromPath: "/geoip",
        toPath: "/wiki/GeoIP.html"
    },
    {
        fromPath: "/help",
        toPath: "/wiki/Help.html"
    },
]

module.exports = {
    name: "essentialsx-wiki-redirects",
    apply: (api, options) => {
        redirects.forEach(redirect => api.pages.createRedirect(redirect));
    }
};
