const git = require("git-state");

let commit;

try {
    commit = git.commitSync(__dirname);
} catch (e) {
    commit = null;
    console.error("Could not determine current commit", e);
}

module.exports = {
    siteConfig: {
        title: "EssentialsX",
        description: "The essential plugin for Spigot servers",
        lang: "en",
        commitHash: commit
    },
    themeConfig: {
        wikiSidebar: {
            "Getting Started": [
                { label: "Introduction", link: "/wiki/Home.html" },
                { label: "Installing EssentialsX", link: "/wiki/Installing-EssentialsX.html" },
                { label: "Module Breakdown", link: "/wiki/Module-Breakdown.html" },
                { label: "Improvements over Essentials", link: "/wiki/Improvements.html" },
                { label: "Frequently Asked Questions", link: "/wiki/Common-Issues.html" }
            ],
            "Configuring EssentialsX": [
                { label: "Command Cooldowns", link: "/wiki/Command-Cooldowns.html" },
                { label: "Color Permissions", link: "/wiki/Color-Permissions.html" },
                { label: "Customising /list", href: "https://wiki.mc-ess.net/wiki/List" },
                { label: "Signs", href: "https://wiki.mc-ess.net/wiki/Sign_Tutorial" },
                { label: "Translations and Custom Messages", link: "/wiki/Locale.html" },
            ],
            "Using EssentialsX": [
                { label: "Signs", href: "https://wiki.mc-ess.net/wiki/Sign_Tutorial" },
                { label: "Banner Meta", link: "/wiki/BannerMeta.html" },
            ],
            Modules: [
                { label: "AntiBuild", href: "https://wiki.mc-ess.net/wiki/AntiBuild" },
                { label: "Chat", link: "/wiki/Module-Breakdown.html#essentialsx-chat" },
                { label: "GeoIP", link: "/wiki/GeoIP.html" },
                { label: "Protect", href: "https://wiki.mc-ess.net/wiki/Configuration_file#EssentialsProtect" },
                { label: "Spawn", link: "/wiki/Module-Breakdown.html#essentialsx-spawn" },
                { label: "XMPP", href: "https://wiki.mc-ess.net/wiki/XMPP" }

            ],
            Reference: [
                { label: "Commands", href: "https://essinfo.xeya.me/commands.html" },
                { label: "Permissions", href: "https://essinfo.xeya.me/permissions.html" },
                { label: "Changelogs", link: "https://github.com/EssentialsX/Essentials/releases" }
            ]
        }
    },
    theme: "./src",
    markdown: {
        plugins: [
            {
                resolve: "markdown-it-anchor",
                options: {
                    permalink: true,
                    permalinkSymbol: "🔗"
                }
            }
        ]
    },
    plugins: [
        { resolve: "./plugins/wiki-redirects" },
        { resolve: "saber-plugin-netlify-redirect" },
    ]
}
