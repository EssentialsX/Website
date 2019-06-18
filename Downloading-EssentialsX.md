## Downloading EssentialsX

You can download EssentialsX from the [website](https://essentialsx.github.io/#/) or from [the build server](https://ci.ender.zone/job/EssentialsX/). You will also need to install [Vault](https://www.spigotmc.org/resources/vault.34315/) and a permissions plugin like [LuckPerms]() to be able to control ranks, permissions, prefixes and suffixes for your players.

EssentialsX is split up into several separate plugins. The only jar that is necessary for EssentialsX to work is the main `EssentialsX` jar, which contains most of the core features most servers will need. The other modules are optional and can be either installed alongside EssentialsX or [replaced with more in-depth plugins](#Alternatives).

### Core
The core EssentialsX jar contains many of the core features for most servers. This includes most commands as well as signs, kits and the economy. **You need this jar for all the other modules to work.**

### Modules
**EssentialsX Chat** includes EssentialsX's chat features; it allows you to customise chat formatting on your server including adding prefixes, suffixes and colours in chat. *You need Vault and LuckPerms to give players prefixes and suffixes.*

**EssentialsX Spawn** lets you control where players spawn both when they first join the server and when they die. You can use the in-game `/setspawn` command to set a spawn location for everyone on your server or for specific groups.

**EssentialsX AntiBuild** adds permissions to your server that let you restrict which players can build on your server, as well as restricting players from placing or breaking certain blocks, like TNT or diamond blocks. *We recommend you use a permissions plugin with AntiBuild to make the most of its features.*

**EssentialsX Protect** allows you to control some simple settings for your worlds, like preventing creepers from damaging buildings, disabling fire spread and disabling certain types of mob spawns.

**EssentialsX GeoIP** provides an approximate lookup of where your players come from, based on their public IP and public geographical databases.

**EssentialsX XMPP** acts as a bridge between the XMPP chat network and your server. This allows players to chat across XMPP networks and your server, and can also report server errors to admins. *If you don't know what XMPP is, you don't need this!*

#### Alternatives
There are many alternative plugins that provide some of EssentialsX's features. If you use a dedicated chat plugin, you won't need to install EssentialsX Chat as it won't do anything useful. In addition, if you use [WorldGuard](http://worldguard.enginehub.org/), you may not need EssentialsX AntiBuild or Protect as WorldGuard includes many of the same features and more.

<!--
**EssentialsX Discord** (coming soon) acts as a bridge between a Discord server and your Minecraft server. This allows players to chat between Discord and your server, as well as letting players link their Discord and Minecraft accounts for special ranks.

(also hi thanks for looking at the raw page 😛)

**EssentialsX Potato** integrates your Minecraft server with the well-known culinary open source project [Potato](https://github.com/drtshock/Potato). This ensures you always have the finest high-quality potatos ready to go!

-->