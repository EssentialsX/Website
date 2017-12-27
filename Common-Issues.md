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
Note that enabling `color` means that players will be allowed to use color codes in the sign text, but still requires that another sign type is enabled.

## EssentialsX overrides a command from Spigot or another plugin
**Related issues: [#1458](/drtshock/Essentials/issue/1458)**  
You can create an alias for commands using Bukkit's `commands.yml` file, which should be in your server root.

The following example overrides `/ban` with Hammer's `/ban` command, forces `/tell` to run the vanilla `/tell` command, and forces EssentialsX to handle the `msg` command.
```yaml
aliases:
    ban:
    - "hammer:ban $1-"
    tell:
    - "minecraft:tell $1-"
    msg:
    - "essentials:msg $1-"
```

See the [Bukkit wiki page](https://bukkit.gamepedia.com/Commands.yml#aliases) for more information.

## Another plugin is overriding an EssentialsX command
You can force EssentialsX to handle commands that are also provided by another plugin using the [`overridden-commands` section](https://github.com/EssentialsX/Essentials/blob/2.x/Essentials/src/config.yml#L138) of your `config.yml`. This will tell EssentialsX not to "give up" the command to the other plugin. For example, to force EssentialsX to try and handle the `/msg` command, your section should look like this:
```yaml
overridden-commands:
  - msg
```

This may not work consistently, however, so you may also need to alias the command to the `essentials:`-prefixed version of the same command. [See above](https://github.com/EssentialsX/Essentials/wiki/Common-Issues#essentialsx-overrides-a-command-from-spigot-or-another-plugin) for details.

## Tab completion doesn't work for commands that override an EssentialsX command
**Related issues: [#1384](/drtshock/Essentials/issue/1384)**  
You can alias the command to the version from the other plugin, which should fix tab complete behaviour - see above.

## I need help with GroupManager! <br /> Where's the updated GroupManager?
EssentialsX does not support GroupManager as it is an outdated and broken plugin. We recommend you switch to [LuckPerms](https://github.com/lucko/LuckPerms) as it is still an actively maintained and regularly updated plugin.