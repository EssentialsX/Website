# Common issues with EssentialsX

## Signs don't work
In your `plugins/Essentials/config.yml` file, you need to uncomment the lines under `enabledSigns` for each type of sign by removing the `#` before it:
```yaml
enabledSigns:
  #- color
  - balance
  #- buy
```
In this example, the `[balance]` sign is enabled but the `[buy]` sign is not.  
Note that enabling `color` means that players will be allowed to use color codes in the sign text.

## EssentialsX overrides a command from Spigot or another plugin
**Related issues: [#1458](/drtshock/Essentials/issue/1458)**  
You can create an alias for commands using Bukkit's `commands.yml` file, which should be in your server root. For example:
```yaml
aliases:
    ban:
    - "<plugin>:ban $1-"
    tell:
    - "minecraft:tell $1-"
```
where `<plugin>` is a placeholder for a plugin name.

See the [Bukkit wiki page](https://bukkit.gamepedia.com/Commands.yml#aliases) for more information.

## Tab completion doesn't work for commands that override an EssentialsX command
**Related issues: [#1384](/drtshock/Essentials/issue/1384)**  
You can alias the command to the version from the other plugin, which should fix tab complete behaviour - see above.

## I need help with GroupManager! / Where's the updated GroupManager?
EssentialsX does not support GroupManager as it is an outdated and broken plugin. We recommend you switch to [LuckPerms](https://github.com/lucko/LuckPerms) as it is still an actively maintained and regularly updated plugin.