---
layout: page-with-hero
title: "Mohist, most beautiful forge + bukkit hybride"
subtitle: "A short presentation, to show what Mohist is the best Minecraft Hybride"
---

*Note: this article is just to present Mohist project*

Mohist is a project initiated by [MGazul](https://github.com/Mgazul) since then, the team has grown greatly

### Context

#### Forge, Bukkit and hybrid servers

For almost as long as Forge and Bukkit have co-existed, there have been several projects which aim to allow Forge mods
and Bukkit plugins to run alongside each other on the same server. The issue with this, however, is that Bukkit was
never designed to support mods, and Forge was never designed to work with the rigid Bukkit API. This means that
generally these forks require considerable modifications to the CraftBukkit and Forge server code, and if done wrong
this leads to both plugins and mods working in unexpected ways but Mohist manage to correct these errors.

#### Mohist and the Bukkit API

To enable this, Mohist must modify the bukkit api, this can create problems, but less than its competitors

Mohist fixed a lot of issues, as:
- **Injecting block/item types added by Forge into the Bukkit `Material` enum twice:**  
  Some mods add blocks/items with the same name as vanilla or other mods. Mohist injects Forge items and blocks into
  Bukkit's `Material` class. One mistake was that the materials could be duplicated, luckily this issue was fixed very quickly

#### Mohist's "plugin checker"

On [10th April 2021](https://github.com/MohistMC/Mohist/commit/58bbb1c8a13dcbf764c11668287e6fb85a884b3a), Mohist added
a "plugin checker", this is a very good addition.
This allows the Mohist team to release a plugin fix, while waiting for this to be fixed in Mohist

### Alternatives to Mohist and hybrid servers

You don't need alternatives, because Mohist is the most beautiful forge + bukkit hybride.
Mohist is available in 1.7.10, 1.12.2, 1.16.5 and soon in 1.17
You can download [Mohist on the website](https://mohistmc.com/)
