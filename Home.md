# EssentialsX wiki!

## Pages
* [BannerMeta](https://github.com/drtshock/Essentials/wiki/BannerMeta)
* [Command Cooldowns](https://github.com/drtshock/Essentials/wiki/Command-Cooldowns)

## Differences between Essentials/Spigot-Essentials and EssentialsX
* `/createkit <kitname> <delay>` - creates a kit out of your inventory.
* Per gamemode permissions, which lets players run `/gma` and `/gms`, but not `/gmc` or `/gmsp` if desired. You need to give the player essentials.gamemode to use the /gm command + whichever gamemodes you want them to be able to change to.
  * `essentials.gamemode.creative`
  * `essentials.gamemode.survival`
  * `essentials.gamemode.adventure`
  * `essentials.gamemode.spectator`
  * `essentials.gamemode.all`
  
  **Note**: `essentials.gamemode` is still required to execute the /gamemode (and its aliases) command.
* Configuration option to not send `no new mail` notification on join.
* Updated to latest Spigot / Minecraft version at all times.
* Actively maintained.
* Updated enchantments.
* Has buy/trade sign support for Minecraft 1.9.
* Allow commands in kits and use `{player}` to replace with player's name.
* `/showkit <kitname>` to show the kit's contents.
* BannerMeta support.
* Fixed mob spawner support. This means you can use spawner signs and commands such as `/i mob_spawner:51`, and the spawners won't be pigs when placed.
* Uses UUID-backed Vault for permissions group and prefix/suffix lookups. This results in better performance due to not needing a name-to-UUID conversion. Spigot-Essentials implements UUID lookups for zPermissions, but not other permissions plugins. Because EssentialsX prioritizes Vault, all queries using the Vault handler should be much faster.
* Adds an option to forcefully disable safe teleportation (very useful for Factions/raiding servers). Mainline Essentials only has two values for the `teleport-safety` option: to convert locations to safe teleports (results in plenty of exploits) or to deny the teleport entirely. EssentialsX adds a `force-disable-teleport-safety` option (default false) that when combined with `teleport-safety: true`, disables conversion to safe locations and teleports the user to their exact location. **Note: To disable cross-world teleportation safety, switch to PaperSpigot and set `disable-teleportation-suffocation-check` to true in paper.yml.** 
* Supports more tree types compared to Essentials and Spigot-Essentials (Mega Redwood, Tall redwood, Tall Birch, etc...)
* `/tppos` has an additional world name argument.
* `/msgtoggle` command allows people to ignore all private messages with permission: `essentials.msgtoggle`
* Fixes for sending and receiving money for EssentialsEco.
* Separate permissions for bulk sell and hand sell
  * `essentials.sell.hand`
  * `essentials.sell.bulk`
* SocialSpy exempt with `essentials.chat.spy.exempt`
* Improved translations for German and French
* Adds configuration option for the milk bucket "easter egg", which (really shouldn't, but does) allow players to mess with other people's horses: `milk-bucket-easter-egg`
* Adds configuration option for the "Set fly mode enabled..." message on join: `send-fly-enable-on-join`
* Fixes giving spawner eggs with entity ID values and potions with damage values in 1.9

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

### If placed spawners are still pigs
* Assign `essentials.spawnerconvert.*` to your default group

### Controlled Private Messaging

**This feature was added in [build 210](https://ci.drtshock.net/job/EssentialsX).**

There is a configurable feature you may set called `last-message-reply-recipient` that if set to `true` makes your reply-recipient whoever you messaged last and not whoever messaged you last, with the exception that if you do not have a reply-recipient then whoever messaged you last will be your reply-recipient.

Here's a formatted scenario of the new last-message-reply-recipient feature:

> **SupaHam: /msg Kakifrucht Hi**

> _SupaHam -> Kakifrucht: Hi_

> **Kakifrucht: /r Hi**

> _Kakifrucht -> SupaHam: Hi_

> **EvilOlaf: /msg Kakifrucht Hi**

> _EvilOlaf -> Kakifrucht: Hi_

> **Kakifrucht: /r Hi back to you, SupaHam!**

> _Kakifrucht -> SupaHam: Hi back to you, SupaHam!_

If this feature is enabled, EssentialsX will take into account the `last-message-reply-recipient-timeout` setting. This setting allows you to configure the duration, in seconds, that the reply-recipient will not change, when receiving replies. If after this duration the recipient receives a message, the recipient's replies will start going to the latest message sender.

### /seen UUID

**This feature was added in [build 241](https://ci.drtshock.net/job/EssentialsX) ([2e903ac](https://github.com/drtshock/Essentials/commit/2e903ac)).**

Typing `/seen SupaHam` and `/seen 5552e21d-de79-40bc-89da-62ee63244fb2` are now both valid methods of checking when a player was last seen.

### Per world /time setting permission

**This feature was added in [build 250](https://ci.drtshock.net/job/EssentialsX) ([eb924b9](https://github.com/drtshock/Essentials/commit/eb924b9)).**

**Note**: In [build 262](https://ci.drtshock.net/job/EssentialsX) (c6d2746) this feature can now be enabled by setting the `world-time-permissions` config property to `true`. `world-time-permissions` is set to false by default.

Prior to this build, players with the permissions `essentials.time` and `essentials.time.set` were able to set the time in any world, despite world-permissions provided via permission plugins. This build provides the feature of per world permissions for setting the time of a world. 

##### Permissions are as follow:

permission | description
---|---
| essentials.time.world.\<world\> | Permits the user to set the time in <world>. <world> is the world name with spaces replaced with _. e.g. My World becomes, my_world. |
| essentials.time.world.all | Permits the user to set time of all worlds. This will override `essentials.time.world.<world>`. |

### AFK Player List name
**This feature was added in [build 263](https://ci.drtshock.net/job/EssentialsX) ([bbf657e](https://github.com/drtshock/Essentials/commit/bbf657e)).**

This build introduces the `afk-list-name` config property which is used to specify the player-list name format for players that are AFK.

The property has two placeholders:
- `{USERNAME}`: The player's name
- `{PLAYER}`: The player's display name.

Here's an example of "[AFK] _SupaHam_":
```yaml
afk-list-name: '&7[AFK] &o{USERNAME}'
```

### Nickname color permissions

**This feature was added in [build 246](https://ci.drtshock.net/job/EssentialsX) ([9f75f1a](https://github.com/drtshock/Essentials/commit/9f75f1a)).**

PR #198 introduced the ability to limit /nick to only allow color changes, ensuring players could still be identified by their original Minecraft name. The feature introduced a new permission node called `essentials.nick.changecolors`. When a player has the preceding permission, they are only allowed to add colours to their names. Where if the player was called SupaHam, he could only be able to use `/nick &5SupaHam` but not `/nick &5TheSupaHam`, where the latter is prefixing the name with 'The'.

However, this feature also introduced the `essentials.nick.changecolors.bypass` permission node. Where if a player has the preceeding permission they are allowed to bypass the check and thus be able to change the characters of their name. This was originally created to ensure convenience for Server Operators without breaking functionality when they updated EssentialsX.

**Note**: This permission requires the `essentials.nick.color` permission in order to use colors in the nickname to begin with. 

### Teleport to spawn when joining

**This feature was added in [build 361](https://ci.drtshock.net/job/EssentialsX) ([b673630](https://github.com/drtshock/Essentials/commit/b673630)).**

Requested in #345. Administrators can now specify whether all joining players are to be teleported to spawn using the `spawn-on-join` option found in the `config.yml` file.

When `spawn-on-join` is `true` all players are teleport to their group spawn point. If no group spawn point has been set, the default spawn point, set with `/setspawn`, will be used instead.

If Admins wish to exempt certain players from this feature when `spawn-on-join` is `true`, they can give them the `essentials.spawn-on-join.exempt` permission and they will log in where they left off, assuming no other plugin is interfering.

### AFK message

**This feature was added in [build 380](https://ci.drtshock.net/job/EssentialsX) ([9dfa650d](https://github.com/drtshock/Essentials/commit/9dfa650d)).** _Requested in [#590](/drtshock/Essentials/issues/590). PR in [#664](/drtshock/Essentials/pull/664)._

Players can now set their AFK message when using the `/afk` command to notify others of their situation. This helps give insight on how long the player will be back so that other inquiring players can be informed and act appropriately.

Players are informed with the AFK message by default when they `/msg` a player who is AFK. However, when a player goes AFK with a message, by default the message will not be broadcast. However, this can be changed in the locale file by modifying `userIsAwayWithMessage` and using the `{1}` argument, the message.

To set the AFK message simply type `/afk <message...>` e.g. `/afk I'm walking my dog`.

In order to use this feature a player must have the `essentials.afk.message` permission.

If a player is muted, they are not able to supply a message as it can be used to exploit their punishment.
