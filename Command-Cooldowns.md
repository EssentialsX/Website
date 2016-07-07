# Command Cooldowns
**This feature was added in [build 369](https://ci.drtshock.net/job/EssentialsX) ([09acbcd](https://github.com/drtshock/Essentials/commit/09acbcdb05f34e0043116f1866904b0ff0f03ddd)).** 
_Requested in [#110](/drtshock/Essentials/issues/110). PR in [#692](/drtshock/Essentials/pull/692)._

This feature introduces the highly demanded ability to apply cooldowns to commands. If you want to limit how often a player can `/feed` or go `/home`, all you have to do is simply add that command to the config:

```yaml
command-cooldowns:
  feed: 10 # 10 seconds
  home: 70 # 1 minute 10 seconds
```

**Advanced users** are able to apply more control to their command matching by using wildcards. Wildcards are specified using asterisks '*'. For example, to match all commands that include the word `potato`, you would simply wrap the world potato in asterisks:
```yaml
command-cooldowns:
  '*potato*': 30
```

**NOTE**: Due to YAML's design, any command starting with * must be wrapped in quotation marks (single or double, ' ") 

For **highly technical users** who understand Regex (Regular Expressions), this feature also supports Regex. In order for EssentialsX to begin interpreting regex, the command must start with a caret '^'. Followed by the explicit regex pattern that EssentialsX should match.

```yaml
command-cooldowns:
  '^^ban([^ip])?( .*)?': 30 # match any ban command that isn't `banip`.
```

**NOTE**: The leading caret is not part of the regex and is simply removed when parsing the regex. So `'^ban([^ip])?( .*)?'` actually becomes `'ban([^ip])?( .*)?'`.

**NOTE 2**: If a plugin command starts with a caret e.g. `^mycommand`, then the caret must be escaped using a blackslash '\' to prevent EssentialsX from interpreting the command as Regex.

# Persistence
By default, EssentialsX will store all existing cooldowns across server sessions. This means when the server shuts down the player cooldowns will be saved and loaded for the next startup. This is especially useful for cooldowns that last any more than a few minutes.

However, this feature can be disabled, making EssentialsX store cooldowns only until the server shuts down. Resetting all cooldowns when the server starts up.

To disable command cooldown persistence simply apply the following change to your config:
```yaml
command-cooldown-persistence: false
```

**NOTE:** If the `command-cooldown-persistence` is not present in the config then it can be added anywhere in the config, as long as it is not indented.

# Bypass
Users can be set to bypass all command cooldowns by giving them the `essentials.commandcooldowns.bypass` permission.