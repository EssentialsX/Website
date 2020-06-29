# Installing EssentialsX

First of all, make sure you're running a supported Minecraft server platform. We recommend using [Paper](https://papermc.io), especially for 1.13+ as it contains many performance improvements over Spigot.

You can download EssentialsX either from [SpigotMC](https://www.spigotmc.org/resources/essentialsx.9089/) for stable releases, or from the [downloads page](https://essentialsx.cf/downloads.html) for development builds with the latest features and bug fixes.

EssentialsX is split up into several separate plugins. The only jar that is necessary for EssentialsX to work is the main `EssentialsX` jar, which contains most of the core features most servers will need. The other modules are optional - see the [[Module-Breakdown|Module Breakdown]] page for more information on what each module does.

Once you've decided which EssentialsX modules you need, copy the required `.jar` files into the `plugins/` directory (if you downloaded from SpigotMC, you'll need to unzip the downloaded file first).

If you don't already have a permissions plugin, we recommend that you install [LuckPerms](https://luckperms.github.io) to control ranks, permissions, prefixes and suffixes for your players. This is optional but recommended.

You'll also need to install [Vault](https://www.spigotmc.org/resources/vault.34315/) to allow EssentialsX to talk to permissions plugins; without it, prefixes, suffixes and group-related features won't work.

Once you've installed all the plugins you need, restart your server. EssentialsX will create configuration files (and upgrade old Essentials data if needed) when it starts up.
