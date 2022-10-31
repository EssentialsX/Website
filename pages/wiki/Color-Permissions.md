# Color Permissions

<!-- alternative title: Colo_u_r Permissions -->

EssentialsX includes permissions that let you control the individual formatting codes players can use in some commands.

This works for the following:
* Sending a PM with `/msg`: `essentials.msg.<suffix>`
* Sending mails with `/mail`: `essentials.mail.<suffix>`
* Setting your own nickname with `/nick`: `essentials.nick.<suffix>`
* Sending chat messages **(requires EssentialsX Chat)**: `essentials.chat.<suffix>`
* Editing a sign with `/editsign`: `essentials.editsign.<suffix>`
* Colors on signs **(requires color signs to be enabled)**: `essentials.signs.<suffix>`

Below is a list of valid permissions suffixes. Note that some codes are only available on EssentialsX 2.16.1.169 and
above:

| Suffix           | Color codes                                       | EssentialsX version |
|------------------|---------------------------------------------------|---------------------|
| `color` (group)  | `&0 &1 &2 &3 &4 &5 &6 &7 &8 &9 &a &b &c &d &e &f` | All versions        |
| `format` (group) | `&l &m &n &o &r`                                  | All versions        |
| `magic` (group)  | `&k`                                              | All versions        |
| `rgb`            | `&#RRGGBB`                                        | 2.18.0+             |
| `black`          | `&0`                                              | 2.16.1.169+         |
| `dark_blue`      | `&1`                                              | 2.16.1.169+         |
| `dark_green`     | `&2`                                              | 2.16.1.169+         |
| `dark_aqua`      | `&3`                                              | 2.16.1.169+         |
| `dark_red`       | `&4`                                              | 2.16.1.169+         |
| `dark_purple`    | `&5`                                              | 2.16.1.169+         |
| `gold`           | `&6`                                              | 2.16.1.169+         |
| `gray`           | `&7`                                              | 2.16.1.169+         |
| `dark_gray`      | `&8`                                              | 2.16.1.169+         |
| `blue`           | `&9`                                              | 2.16.1.169+         |
| `green`          | `&a`                                              | 2.16.1.169+         |
| `aqua`           | `&b`                                              | 2.16.1.169+         |
| `red`            | `&c`                                              | 2.16.1.169+         |
| `light_purple`   | `&d`                                              | 2.16.1.169+         |
| `yellow`         | `&e`                                              | 2.16.1.169+         |
| `white`          | `&f`                                              | 2.16.1.169+         |
| `bold`           | `&l`                                              | 2.16.1.169+         |
| `strikethrough`  | `&m`                                              | 2.16.1.169+         |
| `underline`      | `&n`                                              | 2.16.1.169+         |
| `italic`         | `&o`                                              | 2.16.1.169+         |
| `reset`          | `&r`                                              | 2.16.1.169+         |

The individual permissions take priority over the "group" permissions. For example, if you set `essentials.nick.color`
to `true` then set `essentials.nick.black` to `false`, players will be able to set their nicknames to any color
except black.

## Nicknames

If you want players to be able to change the color of their nickname but not the text itself, set the permission
`essentials.nick.changecolors` to `true`. This will let them use color codes in their nickname, but the text will still
have to match their own username.
