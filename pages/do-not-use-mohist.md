---
layout: page-with-hero
title: "PSA: Do not use Mohist."
subtitle: "A warning about malicious behaviour and the dangers of running untrusted code."
---

*Note: this PSA is not about whether or not we will help you if you run Mohist. That question is answered on the
official EssentialsX downloads page and changelogs.  
This PSA is about security and dangerous behaviour by the Mohist project.*

It has come to our attention that as of [10th April 2021](https://github.com/MohistMC/Mohist/commit/58bbb1c8a13dcbf764c11668287e6fb85a884b3a),
**Mohist tricks users into deleting official plugin jars and installing unofficial modified builds.** Not only is this
behaviour shady, but it also poses significant risk to users who don't know what software they're running.

As a result, we strongly recommend that you **do not use or support the Mohist project in any way going forwards.**
We cannot guarantee the safety or functionality of unofficial builds of EssentialsX, and you should avoid using Mohist
where possible. There are countless alternatives that are safer and more functional, and these alternatives are listed
at the bottom of this page.

### Context

#### Forge, Bukkit and hybrid servers

For almost as long as Forge and Bukkit have co-existed, there have been several projects which aim to allow Forge mods
and Bukkit plugins to run alongside each other on the same server. The issue with this, however, is that Bukkit was
never designed to support mods, and Forge was never designed to work with the rigid Bukkit API. This means that
generally these forks require considerable modifications to the CraftBukkit and Forge server code, and if done wrong
this leads to both plugins and mods working in unexpected ways.

#### Mohist and the Bukkit API

However, over the past year, instead of trying to implement the Bukkit API properly, the Mohist project has chosen to
make several breaking changes to the CraftBukkit code patches it uses. These changes fundamentally break how the Bukkit
API is designed to function:

- **Injecting block/item types added by Forge into the Bukkit `Material` enum twice:**  
  Some mods add blocks/items with the same name as vanilla or other mods. Mohist injects Forge items and blocks into
  Bukkit's `Material` class, but somehow managed to [register the same material more than once](https://github.com/MohistMC/Mohist/issues/443).
  Enums in Java should only contain one instance per identifier, and this means any plugin trying to interact with
  items or blocks is prone to breaking with no warning. This also means any plugins that register default permissions
  for materials will break.
- **Re-creating the Bukkit `Player` object:**  
  Bukkit's `Player` interface allows plugins to access online players on the server, and is a core part of the Bukkit
  API. On a standard CraftBukkit-based server, the `Player` implementation is kept around while the player is online
  even if the player entity changes (ie when it dies), and updates itself accordingly based on what happens in the
  underlying Mojang code.  
  However, Mohist changes this behaviour so that the Bukkit `Player` is replaced every time the player dies, *even
  though this class is supposed to wrap around the underlying player entity and update when it changes*! This broke
  the majority of EssentialsX, as the `Player` we use becomes detached from the actual server whenever someone dies.

These changes (and likely others too) consequently break several plugins, including but not limited to EssentialsX.
Despite being warned that these are breaking changes and will cause issues, the Mohist project has refused to fix their
implementation of Bukkit, and instead has employed further workarounds to hide issues with plugins.

#### Mohist's dangerous "plugin checker"

On [10th April 2021](https://github.com/MohistMC/Mohist/commit/58bbb1c8a13dcbf764c11668287e6fb85a884b3a), Mohist added
a "plugin checker", which scans for plugins that Mohist breaks and shows the following message:

![Screenshot of Mohist warning message](https://cdn.discordapp.com/attachments/762376197308547082/851490309585502269/unknown.png)

Not only is this message misleading (implying that EssentialsX is at fault when the real issue is on Mohist's end), but
it tricks users into **deleting the software they downloaded from a trusted source** and **running arbitrary code**
from an unknown source, *without telling the user what is wrong with the plugin they downloaded, how the "correct
version" is any better, or where the "correct" version even originates from*. Many users who see this prompt will not
understand that Mohist is downloading and running arbitrary modified code instead of the official plugin jars they
downloaded. Furthermore, this mechanism could very easily be abused to download malware, hidden behind the names of
other well-known projects and using the excuse of "fixes".

There are several better ways the Mohist team can rectify their issues, but the correct way is this: **write a
compliant Bukkit API implementation**. Other similar projects already achieve this, *without* relying on tricking users
into downloading and executing unknown code. Mohist's decision to mislead users into downloading untrusted code shows
that they do not care about the security of their users.

### Alternatives to Mohist and hybrid servers

There are countless alternative hybrid servers that attempt to run Bukkit plugins on top of Forge, but many suffer from
similar incompatibilities as Mohist does.

However, if you're running a 1.12.2 server, [SpongeForge](https://www.spongepowered.org/) is a mature and
well-engineered solution which allows running a rich ecosystem of [SpongeAPI plugins](https://ore.spongepowered.org/)
alongside Forge mods. SpongeAPI is designed to support the nuances of modded platforms, and in general Sponge plugins
work seamlessly with Forge mods - for example, [Nucleus](https://v2.nucleuspowered.org/) includes almost every feature
of EssentialsX and more, and is 100% compatible with mods. Many Bukkit plugins also have equivalent Sponge ports, and
some (such as [LuckPerms](https://luckperms.net/)) even allow you to use your existing Bukkit data when you switch to
Sponge.

For newer versions of Minecraft, SpongeForge currently isn't available. However, there is a wide selection of
server-side mods for Forge and Fabric that can replace plugins, which you can find sites like on [CurseForge](https://www.curseforge.com/minecraft/mc-mods/ftb-essentials-forge)
and [Modrinth](https://modrinth.com/mods). For example, [FTB Essentials](https://www.curseforge.com/minecraft/mc-mods/ftb-essentials-forge)
for Forge includes features similar to EssentialsX, while [FTB Chunks](https://www.curseforge.com/minecraft/mc-mods/ftb-chunks-forge)
allows for land claims and protection.
