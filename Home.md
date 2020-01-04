# EssentialsX wiki!

EssentialsX is the essential plugin for Spigot servers, providing core features for servers of any size and scale. These features include:
* **Player-made homes**
* Server **warps** and **kits**, either server-wide or per-world
* Player-to-player **private messages, teleports and teleport requests**
* Custom player **nicknames**
* Various moderation tools including **kicks, temporary bans, mutes and jails**
* Built-in economy features including **sign shops, command costs and full Vault support**

In addition, EssentialsX's optional modules provide further integrated features like chat formatting, world protection, GeoIP lookup and more - see the [Module Breakdown](Module-Breakdown) for more information.

## Pages

* [Banner Metadata](BannerMeta)
* [Command Cooldowns](Command-Cooldowns)
* [Color Permissions](Color-Permissions)
* [Commands list](https://essinfo.xeya.me/commands.php) (community-maintained)
* [Permissions list](https://essinfo.xeya.me/permissions.php) (community-maintained)

**Note:** When updating EssentialsX, you need to update *all* the modules to the same version to prevent version mismatch errors. In addition, you may want to update your config file - the latest config file can always be found [here](https://github.com/EssentialsX/Essentials/blob/2.x/Essentials/src/config.yml).

## Updating from Essentials 2

EssentialsX is a fork of the original [Essentials project](https://github.com/essentials/Essentials), which was discontinued in 2014. EssentialsX adds several new features over the original Essentials - [the Improvements page](Improvements) and [EssentialsX changelogs](https://github.com/EssentialsX/Essentials/releases) for more information.

To upgrade from Essentials 2.14.x or earlier, stop your server, delete the old Essentials jars and replace them with the equivalent EssentialsX jars. We recommend renaming your `config.yml` file to take advantage of new settings added by EssentialsX, and taking a full backup of your `plugins/Essentials/` folder. Once you restart your server, EssentialsX will create a new `config.yml` and update old user data to the new format.
