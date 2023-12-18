# Creating custom text commands

EssentialsX's text commands can be edited through text files in the `plugins/Essentials` directory. Simply run the command in-game once, then you'll find the corresponding text file inside `plugins/Essentials` to edit it.

**NOTE: as of writing, custom text files don't support MiniMessage yet. Support will be added soon.**

For example, here's the default `motd.txt`:

```
&6Welcome, {PLAYER}&6!
&6Type &c/help&6 for a list of commands.
&6Type &c/list&6 to see who else is online.
&6Players online:&c {ONLINE} &6- World time:&c {WORLDTIME12}
```

These files support [Keywords](/wiki/Keywords.html) as placeholders.

There are several files you can use. Most of these are created when the corresponding command is run (with the exception of `help.txt`):

| File name          | Usage                                                                                   |
|--------------------|-----------------------------------------------------------------------------------------|
| `book.txt`         | Used to define custom book contents - see below                                         |
| `custom.txt`       | Displayed when a user runs `/customtext` - we recommend custom command aliases for this |
| `help.txt`         | If this file exists, it will override the contents of `/help` (by default this is your server's command list) |
| `info.txt`         | Displayed when a user runs `/info`                                                      |
| `motd.txt`         | Displayed when a user joins with the `essentials.motd` permission and in `/motd`        |
| `rules.txt`        | Displayed when a user runs `/rules`                                                     |

## Creating text commands with multiple pages

You can create custom text commands with named pages. To add a chapter within a text file, add a new line containing `#<chapter name>`.  

For example, the following `rules.txt` file would create both a default `/rules` chapter and a separate `/rules chat` chapter:

```
These are the rules when playing on the server:
1. Don't steal pufferfish
2. Don't dig up sand beaches
Before chatting, make sure you check the chat rules: /rules chat

#chat
When chatting, these are the rules:
1. Don't swear
2. Don't say mean things about JRoy
```

When a chapter overflows the text box, EssentialsX will split it into multiple pages, which can be accessed by running `/<command> [page]`.

## Creating custom books in `book.txt`

Custom books can be created and edited similarly to custom text commands.

First, similar to chapters above, create a new chapter inside `book.txt` for your book:
```
(...)

#story
Once upon a time, in a land not that far away, a man called JRoy embarked on an adventure that would shape the destiny of his virtual realm.
JRoy was an intrepid explorer in the world of EssentialsX, a vast and dynamic landscape where plugins and commands ruled.
Tales of his epic journey spread far and wide, capturing the imaginations of players and server administrators alike.
```

You can then use the `book:<chapter>` ItemMeta tag to create this book:

* `/give mdcfe writtenbook 1 title:JRoy's_Adventure author:Chester book:story`
* `/item writtenbook 1 title:JRoy's_Adventure author:Chester book:story`
* In `kits.yml`: `- writtenbook 1 title:JRoy's_Adventure author:Chester book:story`

## Customising `/help`

You can customise EssentialsX's `/help` command using either config options or a custom `help.txt` file.

You can edit the `non-ess-in-help` and `hide-permissionless-help` options in `config.yml`.  
These control whether `/help` will display non-Essentials commands and whether it will show commands to players when it can't check permissions for the command respectively.

You can also replace `/help` with custom text as shown above.

## Overriding custom text files for specific groups and users

Per-group and per-player overrides can be created for all the above text files, to create a different set of chapters for different players.

You can override text files for a specific player by creating a `info_<username>.txt` file under `plugins/Essentials/`.

Similarly, you can override text files for users in a particular primary group by creating a new file called `info_<groupname>.txt`.  
This relies on players having the correct primary group assigned in their permissions plugin.

**Note: LuckPerms allows groups to have a custom "display name". This changes the name visible to EssentialsX and other plugins, and will stop per-group text files from working as expected.**  
We strongly recommend that you use group prefixes and suffixes for chat formatting instead of custom group display names.
