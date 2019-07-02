EssentialsX is a continuation of the origin Essentials plugin. Essentials was discontinued around 2014, and EssentialsX contains notable improvements over the original Essentials.

## Highlights
* Actively maintained and updated for 1.8.8 all the way up to the latest Spigot and Minecraft versions.
* Supports new Minecraft content including new items, enchantments, mobs and trees.
* Supports [Essentials signs](https://wiki.mc-ess.net/wiki/Sign_Tutorial) on all Minecraft versions.
* Supports [Banner Metadata](BannerMeta) and [Command Cooldowns](Command-Cooldowns).
* Configuration option to hide the `no new mail` message on join.
* Allows commands in kits with a `{player}` placeholder for the player's name.
* Supports mob spawners on recent versions.
  - On 1.8-1.12, you can use spawner signs and commands such as `/i mob_spawner:51`, and the spawners won't be pigs when placed.
  - On 1.13+, you can use `/i blazespawner` to spawn in spawners.
* Includes a new, more flexible item database for 1.13 and above.
* Supports giving spawner eggs with entity ID values and potions with damage values in 1.9-1.12.
* Fixes sending and receiving money with the Essentials economy.
* Uses UUID-backed Vault for permissions group and prefix/suffix lookups.
  - Spigot-Essentials implements UUID lookups for zPermissions, but not other permissions plugins.
  - EssentialsX prioritizes Vault, so all queries using the Vault handler should be much faster as they don't need a name-to-UUID lookup.
* `/tppos` can now optionally accept a world name.
* Adds a `/msgtoggle` command to allow people to ignore all private messages.
* Separate permissions for bulk sell and hand sell: `essentials.sell.hand` and `essentials.sell.bulk` respectively
* Adds a permission for exemption from SocialSpy: `essentials.chat.spy.exempt`
* Adds configuration option for the milk bucket "easter egg", which (really shouldn't, but does) allow players to mess with other people's horses: `milk-bucket-easter-egg`
* Adds configuration option for the "Set fly mode enabled..." message on join: `send-fly-enable-on-join`

## New features

### Per-gamemode permissions
Permissions have been added for each gamemode with the EssentialsX `/gamemode` command, meaning that if desired, players may run `/gma` and `/gms`, but not `/gmc` or `/gmsp`. You need to give the player `essentials.gamemode` to use the /gm command, then whichever gamemodes you want them to be able to change to:
* `essentials.gamemode.creative`
* `essentials.gamemode.survival`
* `essentials.gamemode.adventure`
* `essentials.gamemode.spectator`
* `essentials.gamemode.all`

**Note**: `essentials.gamemode` is still required to execute the /gamemode (and its aliases) command.

### Kits changes
Kits have been moved from the main config to `kits.yml`. This means that kits can be created from in-game and automatically added to your server without needing to manually edit the config, while also retaining all the comments in `config.yml`.

In addition, commands are now supported in kits - simply add a line to your kit as follows:
```yaml
kits:
  mykit:
    delay: 1000
    items:
      - 272 1
      - /give {player} apple 1
```

You can also include `{player}`, which will be substituted for the player's name.

#### `/showkit`
Command: `/showkit <kitname>`
Permission: `essentials.showkit`
Shows a list of kit contents straight from config file.
![showkit](https://i.imgur.com/d4Ff8vN.png)

#### `/createkit`
Command: `/createkit <kitname> <delay>`
Permission: `essentials.createkit`
If `pastebin-createkit` is set to false, creates a kit from your inventory and puts it in the `kits.yml` file.
If `pastebin-createkit` is set to true, creates a kit based on your inventory and returns a link to the file to add to your `kits.yml`.
![createkit](https://i.imgur.com/nXMlNGP.png)

### Forcefully disable teleportation safety

Upstream Essentials only has two values for the `teleport-safety` option:
* Convert locations to safe teleports (results in plenty of exploits); or
* Deny the teleport entirely.

EssentialsX adds a `force-disable-teleport-safety` option (defaulting to false), that when combined with `teleport-safety: true`, disables conversion to safe locations and teleports the user to their exact location.

**Note:** To disable cross-world teleportation safety, switch to Paper and set `disable-teleportation-suffocation-check` to true in paper.yml.

### Spawner placement fix
If your placed spawners are still pig spawners, assign `essentials.spawnerconvert.*` to your default group.

### Controlled Private Messaging

The new config option `last-message-reply-recipient` lets you change how `/reply` works. If set to `true`, your reply recipient will be **whoever you messaged** last and *not* **whoever messaged you** last. If you don't have a reply recipient, whoever messaged you last will be your reply recipient.

Here's a formatted scenario of the new last-message-reply-recipient feature:

> **SupaHam: `/msg Kakifrucht Hi`**

> _SupaHam -> Kakifrucht: Hi_

> **Kakifrucht: `/r Hi`**

> _Kakifrucht -> SupaHam: Hi_

> **EvilOlaf: `/msg Kakifrucht Hi`**

> _EvilOlaf -> Kakifrucht: Hi_

> **Kakifrucht: `/r Hi back to you, SupaHam!`**

> _Kakifrucht -> SupaHam: Hi back to you, SupaHam!_

If this feature is enabled, EssentialsX will also use the `last-message-reply-recipient-timeout` setting. This setting allows you to control how long in seconds before the player's reply recipient is reset. After this duration, when a player receives a message, their replies will start going to the last person who sent them a message.

### `/seen` by UUID

Typing `/seen SupaHam` and `/seen 5552e21d-de79-40bc-89da-62ee63244fb2` are now both valid methods of checking when a player was last seen.

### Per-world `/time` setting permission

Prior to this build, players with the permissions `essentials.time` and `essentials.time.set` were able to set the time in any world, regardless of any world permissions set in permission plugins. If `world-time-permissions` is set to `true` in the config, users will need a specific permission to set the time in each world - see the table below. This feature is disabled by default.

#### Permissions
| Permission                      | Description |
|---------------------------------|-------------|
| essentials.time.world.`<world>` | Permits the user to set the time in `<world>`. `<world>` is the world name with spaces replaced with _. e.g. My World becomes, my_world. |
| essentials.time.world.all       | Permits the user to set time of all worlds. This will override `essentials.time.world.<world>`. |

### AFK Player List name

This build introduces the `afk-list-name` config property which is used to control how AFK players appear in the player list.

The property has two placeholders:
- `{USERNAME}`: The player's name
- `{PLAYER}`: The player's display name.

Here's an example of "[AFK] _SupaHam_":
```yaml
afk-list-name: '&7[AFK] &o{USERNAME}'
```

### Nickname color permissions

PR #198 introduced the ability to limit /nick to only allow color changes, ensuring players could still be identified by their original Minecraft name. The feature introduced a new permission node called `essentials.nick.changecolors`. When a player has the preceding permission, they are only allowed to add colours to their names. Where if the player was called SupaHam, he could only be able to use `/nick &5SupaHam` but not `/nick &5TheSupaHam`, where the latter is prefixing the name with 'The'.

However, this feature also introduced the `essentials.nick.changecolors.bypass` permission node. Where if a player has the preceeding permission they are allowed to bypass the check and thus be able to change the characters of their name. This was originally created to ensure convenience for Server Operators without breaking functionality when they updated EssentialsX.

**Note**: This permission requires the `essentials.nick.color` permission in order to use colors in the nickname to begin with.

### Teleport to spawn when joining

**This feature was added in [build 361](https://ci.ender.zone/job/EssentialsX) ([b673630](https://github.com/drtshock/Essentials/commit/b673630)).**

Requested in #345. Administrators can now specify whether joining players are to be teleported to spawn using the `spawn-on-join` option found in the `config.yml` file.

`spawn-on-join` accepts several types of values:

1. `true`/`"*"` - **all players** will be teleported to spawn when joining.
2. `false` - **no players** will be teleported to spawn when joining
3. String - The value is treated as a group name. If a player is in the group, they will be teleported to spawn when joining.
4. List of Strings - The value is treated as a list of group names. If a player is in *any* of these groups, they will be teleported to spawn when joining.

When `spawn-on-join` is `true`, all players will be teleported to their group spawn point. If no group spawn point has been set, the default spawn point set with `/setspawn` will be used instead.

If admins wish to exempt certain players from this feature when `spawn-on-join` is `true`, they can give them the `essentials.spawn-on-join.exempt` permission and they will log in where they left off, assuming no other plugin is interfering.

### AFK message

_Requested in [#590](/drtshock/Essentials/issues/590); PR in [#664](/drtshock/Essentials/pull/664)._

Players can set their AFK message when using the `/afk` command to notify others of their situation. When a player sends a message with `/msg` to an AFK player, they will see the AFK player's message.

By default, when a player sets their AFK status, the message will not be broadcast to the whole server. However, this can be changed in the [locale file](Locale) by adding `{1}` to the `userIsAwayWithMessage` message, where `{1}` will be replaced by the player's AFK message.

To set your AFK message, simply type `/afk <message...>`. For example: `/afk I'm walking my dog`.

In order to use this feature a player must have the `essentials.afk.message` permission. However, if a player is muted, they will not be able to supply a message as it can be used to exploit their punishment.

### Pay toggle
_Requested in [#413](/drtshock/Essentials/issues/413); added in [2493c65](https://github.com/drtshock/Essentials/commit/2493c65)._

Players have the ability to disable any and all payment via the `/paytoggle` command. This can be used to combat players using `/pay` as a means of spam towards other players, like celebrities on your server.

`paytoggle` also has the following aliases: `epaytoggle`, `payoff`, `epayoff`, `payon`, `epayon`

`payoff` will always disable payments to prevent errors. On the contrary, `payon` will always enable payments.

### Command confirmations for `/pay` and `/clearinventory`
_Requested in [#1032](/drtshock/Essentials/issues/1032); added in [5f83766](https://github.com/drtshock/Essentials/commit/5f83766)._

You can now specify whether players are prompted to confirm `/clearinventory` and `/pay` commands before they are executed using the `default-enabled-confirm-commands` section of the config.

In addition, players can turn confirmations on or off for themselves with `/clearconfirm` and `/payconfirm` respectively.

### Teleport to exact coordinates

This feature was implemented in ([0a563b9](https://github.com/drtshock/Essentials/commit/0a563b9)).

This feature introduces the `teleport-to-center` configuration feature. When set to `true` (default), all teleportations are centered to the block; technically, setting the x and z coordinate decimals to .5 and .5. When `teleport-to-center` is set to `false`, all teleports are performed to the exact location as given.

### Mail chat formatting
_Requested in [#1560](/drtshock/Essentials/issues/1560); added in [665229b](https://github.com/drtshock/Essentials/commit/665229b)._

This feature introduces the ability to format `/mail` messages using `&` formatting codes - [click here](Color-Permissions) for more information.

### Helmet slot hat
_Added in [7958cd0](https://github.com/EssentialsX/Essentials/commit/7958cd0b880205edaeaf34420bafde8d5cc1f7ed)._

If `allow-direct-hat` is enabled in the `config.yml`, then players with the permission `essentials.hat` can click on their helmet slot to place any block on their head, not just helmets.
