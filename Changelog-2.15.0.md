# EssentialsX 2.15.0

`EssentialsX 2.15.0` was released on March 28th, 2018.

Previous release: `EssentialsX 2.0.1-b488` on June 20th, 2017.
Next release: [[`EssentialsX 2.16.0`|Changelog-2.16.0]] on January 3rd, 2019.

## Changes

### Main Essentials

* Kits now support itemflags. ([Details](#itemflags-in-kits))
* Kits have been moved from `config.yml` to `kits.yml`. See [details](#kitsyml) for information on upgrading.
* `/me` now respects users that ignore it.
* Pagination has been fixed in news and info.
* Splash potion support in `/potion` has been fixed.
* Tons of translations have been updated.
* Messages are now sorted alphabetically in messages.properties.
* `/tppos` now respects per-world teleport permissions.
* Tempban expiry shows on join
* Optional confirmations for `/pay` and `/clearinventory` have been added.
* Deeper LuckPerms support
* God mode is now checked on login.
* `/seen` and `/whois` now support tab complete, as well as lots of other commands.
* The message displayed to banned users when trying to join can now be translated.
* Socialspy can now optionally include messages from muted players
* Muted players can no longer use `/r`
* Versioning system updated to `major.minor.patch.commits`, inspired by LuckPerms

For a more detailed list of additions and fixes, see the [release page](https://github.com/EssentialsX/Essentials/releases/tag/2.15.0).

### Essentials Chat

* `{PREFIX}` and `{SUFFIX}` now work as tags to put in the chat format. They will retrieve the prefix and suffix from your permissions plugin (requires Vault).

### Essentials Spawn

* Allow configuring spawn-on-join and respawn priority separately - fixed issue with Multiverse wanting priority on spawns

### Essentials GeoIP

* @k-jiang updated to new GeoIP database since old version wasn't supported anymore.

## Details

### ItemFlags in Kits

[ItemFlags](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/inventory/ItemFlag.html) can be added to kits now by using:

`itemflags:flag1` OR

`itemflags:flag1,flag2`

### kits.yml

When you run 2.15.0 for the first time, your kits in your `config.yml` will be automatically migrated to a new `kits.yml` file. Once the migration has taken place, you can safely delete the `kits` section of your `config.yml`, as it is no longer used.

`/createkit` is a command that we've had for almost 3 years at the time of this posting. You can now create kits using this in game command without worrying about messing up the formatting of your config.yml! We will be expanding the functionality of /createkit in the future.

Make sure that you disable `pastebin-createkit` in your `config.yml` if you want to add kits directly to your `kits.yml`.
