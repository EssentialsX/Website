# EssentialsX wiki!

## Differences between Essentials and EssentialsX
* `/createkit <kitname> <delay>` - creates a kit out of your inventory.
* Per gamemode permissions. Allowing players to /adventure and /survival but not /creative if desired.
* Configuration option to not send `no new mail` notification on join.
* Updated to latest Spigot / Minecraft version at all times.
* Actively maintained.
* Updated enchantments.
* Allow commands in kits and use `{player}` to replace with player's name.
* `/showkit <kitname>` to show the kit's contents.
* BannerMeta support.
* Fixed mob spawners for 1.8.3+, this means you can use spawner signs and commands such as `/i mob_spawner:51`, and the spawners won't be pigs when placed
* Uses UUID-backed Vault for permissions group and prefix/suffix lookups. This results in better performance due to not needing a name-to-UUID conversion. Spigot-Essentials implements UUID lookups for zPermissions, but not other permissions plugins. Because EssentialsX prioritizes Vault, all queries using the Vault handler should be much faster.

### Showkit
Command: `/showkit <kitname>`
Permission: `essentials.showkit`
Shows a list of kit contents straight from config file.
![showkit](https://i.imgur.com/d4Ff8vN.png)

### Createkit
Command: `/createkit <kitname> <delay>`
Permission: `essentials.createkit`
Creates a kit from your inventory and puts it in the config file. *This will remove comments from your config file* :disappointed: 
![createkit](https://i.imgur.com/nXMlNGP.png)