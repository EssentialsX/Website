module.exports = {
    "siteConfig": {
        "title": "EssentialsX",
        "description": "The essential plugin for Spigot servers",
        "lang": "en"
    },
    "themeConfig": {
        "wikiSidebar": {
            "Getting Started": [
                { "label": "Introduction", "link": "/wiki/Home.html" },
                { "label": "Downloading EssentialsX", "link": "/wiki/Downloading-EssentialsX.html" },
                { "label": "Improvements over Essentials", "link": "/wiki/Improvements.html" },
                { "label": "Frequently Asked Questions", "link": "/wiki/Common-Issues.html" }
            ],
            "Features": [
                { "label": "Banner Meta", "link": "/wiki/BannerMeta.html" },
                { "label": "Command Cooldowns", "link": "/wiki/Command-Cooldowns.html" },
                { "label": "Color Permissions", "link": "/wiki/Color-Permissions.html" }
            ],
            "Reference": [
                { "label": "Commands", "href": "https://essinfo.xeya.me/index.php?page=commands" },
                { "label": "Permissions", "href": "https://essinfo.xeya.me/index.php?page=permissions" },
                { "label": "Changelogs", "link": "/wiki/Changelogs.html" }
            ]
        }
    },
    "theme": "./src",
    "markdown": {
        "plugins": [
            {
                "resolve": "markdown-it-wikilinks",
                "options": {
                    "baseURL": "/wiki/",
                    "makeAllLinksAbsolute": true
                }
            }
        ]
    },
    "plugins": [
        { "resolve": "saber-plugin-netlify-redirect" }
    ]
}
