//Do not rely on redirects, as a standard links should be correct. This has overhead for both client and server.
const redirects = [
//Handles links that don't direct to wiki and forget .html.
    {
        fromPath: "/Home",
        toPath: "/wiki/Home.html"
    },
    {
        fromPath: "/Installing-EssentialsX",
        toPath: "/wiki/Installing-EssentialsX.html"
    },
    {
        fromPath: "/Module-Breakdown",
        toPath: "/wiki/Module-Breakdown.html"
    },
    {
        fromPath: "/Improvements",
        toPath: "/wiki/Improvements.html"
    },
    {
        fromPath: "/Locale",
        toPath: "/wiki/Locale.html"
    },
    {
        fromPath: "/Common-Issues",
        toPath: "/wiki/Common-Issues.html"
    },
    {
        fromPath: "/Command-Cooldowns",
        toPath: "/wiki/Commmand-Cooldowns.html"
    },
    {
        fromPath: "/Color-Permissions",
        toPath: "/wiki/Color-Permissions.html"
    },
    {
        fromPath: "/BannerMeta",
        toPath: "/wiki/BannerMeta.html"
    },
    {
        fromPath: "/geoip",
        toPath: "/wiki/GeoIP.html"
    },
    {
        fromPath: "/help",
        toPath: "/wiki/Help.html"
    },
//Handles links that forget wiki but not .html.
    {
        fromPath: "/Home.html",
        toPath: "/wiki/Home.html"
    },
    {
        fromPath: "/Installing-EssentialsX.html",
        toPath: "/wiki/Installing-EssentialsX.html"
    },
    {
        fromPath: "/Module-Breakdown.html",
        toPath: "/wiki/Module-Breakdown.html"
    },
    {
        fromPath: "/Improvements.html",
        toPath: "/wiki/Improvements.html"
    },
    {
        fromPath: "/Locale.html",
        toPath: "/wiki/Locale.html"
    },
    {
        fromPath: "/Common-Issues.html",
        toPath: "/wiki/Common-Issues.html"
    },
    {
        fromPath: "/Command-Cooldowns.html",
        toPath: "/wiki/Commmand-Cooldowns.html"
    },
    {
        fromPath: "/Color-Permissions.html",
        toPath: "/wiki/Color-Permissions.html"
    },
    {
        fromPath: "/BannerMeta.html",
        toPath: "/wiki/BannerMeta.html"
    },
    {
        fromPath: "/geoip.html",
        toPath: "/wiki/GeoIP.html"
    },
    {
        fromPath: "/help.html",
        toPath: "/wiki/Help.html"
    },
//Module redirects.    
    {
        fromPath: "/Module-Breakdown#essentialsx-antibuild",
        toPath: "/wiki/Module-Breakdown.html#essentialsx-antibuild"
    },
    {
        fromPath: "/Module-Breakdown#essentialsx-chat",
        toPath: "/wiki/Module-Breakdown.html#essentialsx-chat"
    },
    {
        fromPath: "/Module-Breakdown#essentialsx-geoip",
        toPath: "/wiki/Module-Breakdown.html#essentialsx-geoip"
    },
    {
        fromPath: "/Module-Breakdown#essentialsx-protect",
        toPath: "/wiki/Module-Breakdown.html#essentialsx-protect"
    },
    {
        fromPath: "/Module-Breakdown#essentialsx-spawn",
        toPath: "/wiki/Module-Breakdown.html#essentialsx-spawn"
    },
    {
        fromPath: "/Module-Breakdown#essentialsx-xmpp",
        toPath: "/wiki/Module-Breakdown.html#essentialsx-xmpp"
    },
]

module.exports = {
    name: "essentialsx-wiki-redirects",
    apply: (api, options) => {
        redirects.forEach(redirect => api.pages.createRedirect(redirect));
    }
};
