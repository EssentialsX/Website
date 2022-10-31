# Keywords

EssentialsX provides a number of standard keywords (placeholders) that can be used to customize text in multiple places across the plugin.

| Keyword                 | Usage                                                        |
| ----------------------- | ------------------------------------------------------------ |
| {PLAYER}, {DISPLAYNAME} | The player's display name.                                   |
| {USERNAME}              | The player's username.                                      |
| {NICKNAME}              | The player's EssentialsX nickname. If the player has no nickname, the username is used. |
| {PREFIX}                | The player's prefix, supplied by a permissions plugin via Vault. |
| {SUFFIX}                | The player's suffix, supplied by a permissions plugin via Vault. |
| {GROUP}                 | The player's primary group, supplied by a permissions plugin via Vault. |
| {BALANCE}               | The player's balance, formatted as currency.                 |
| {MAILS}                 | The amount of mail the player has.                           |
| {PLAYTIME}              | The player's playtime, formatted as a duration.              |
| {WORLD}, {WORLDNAME}    | The full name of the player's current world.                 |
| {WORLDTIME12}           | The time of the player's current world in AM/PM format.      |
| {WORLDTIME24}           | The time of the player's current world in 24-hour format.    |
| {WORLDDATE}             | The date of the player's current world.                      |
| {IP}                    | The player's IP address.                                     |
| {ADDRESS}               | The player's socket address.                                 |
| {ONLINE}                | The amount of players online. Hidden players (e.g. those in vanish) are not counted. |
| {UNIQUE}                | The amount of unique players that have joined the server.    |
| {WORLDS}                | The list of worlds on the server.                            |
| {PLAYERLIST}            | The list of players currently online. Hidden players (e.g. those in vanish) are not listed. |
| {TIME}                  | The current time of the machine the server is running on.    |
| {DATE}                  | The current date of the machine the server is running on.    |
| {TPS}                   | The server's current TPS.                                    |
| {UPTIME}                | The time elapsed since the server started up, formatted as a duration. |
| {PLUGINS}               | The list of plugins on the server.                           |
| {VERSION}               | The server's version string.                                 |

### Where can I use these keywords?

These keywords can be used with the following EssentialsX features:

- Custom text files: `book.txt`, `custom.txt`, `info.txt`, `motd.txt`, `rules.txt`
- Kits: inside the `kits.yml` file.
- EssentialsX Spawn's newbie announcement: `newbies.announce-format` in the config.
- The `/broadcastworld` command.

