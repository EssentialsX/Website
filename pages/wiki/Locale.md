# Translations and Custom Messages

EssentialsX includes messages for a wide range of languages out-of-the-box, as well as extensive support for customising almost every message in the plugin.

## Changing your server's language

By default, EssentialsX will attempt to use your system language if it is supported by the plugin.  
You can change the default language by uncommenting and setting the `locale` option in `config.yml`:

```yaml
# Set the locale for all messages.
# ...
locale: de
```

**NEW:** As of EssentialsX 2.21.0, you can now enable per-player translations with the `per-player-locale` option.  
With this enabled, EssentialsX will attempt to display messages to each player in the language they play Minecraft in.  
Players can change their game language in their game's settings. If a language is not supported, EssentialsX will use the default `locale` set above.

```yaml
# Should EssentialsX use player's language instead of the server's when sending messages?
# ...
per-player-locale: true
```

### Supported languages

These languages are supported out-of-the-box. Note that not all languages are fully translated, so some languages may display some messages in English.  

These translations are maintained by the community.  
If your language is incomplete or isn't listed here, you can help translate EssentialsX over on [Crowdin](https://translate.essentialsx.net/).

| Code    | Language                        |
|---------|---------------------------------|
| `en`    | English (US)                    |
| `en_GB` | English (UK)                    |
| `cs`    | Czech                           |
| `da`    | Danish                          |
| `de`    | German                          |
| `es`    | Spanish                         |
| `et`    | Estonian                        |
| `fi`    | Finnish                         |
| `fr`    | French                          |
| `hu`    | Hungarian                       |
| `it`    | Italian                         |
| `ko`    | Korean                          |
| `lt`    | Lithuanian                      |
| `nl`    | Dutch                           |
| `pl`    | Polish                          |
| `pt`    | Portuguese                      |
| `pt_BR` | Portuguese (Brazil)             |
| `ro`    | Romanian                        |
| `ru`    | Russian                         |
| `sv`    | Swedish                         |
| `tr`    | Turkish                         |
| `zh`    | Simplified Chinese              |
| `zh_HK` | Traditional Chinese (Hong Kong) |
| `zh_TW` | Traditional Chinese (Taiwan)    |

## Customising messages

In addition to using EssentialsX's built-in translations, you can also customise the text, appearance and functionality of EssentialsX messages!

### Changing the default colours

**NEW IN 2.21.0:** If you just want to change the colours used in the standard EssentialsX messages, you can do so using the `message-colors` section of `config.yml`:

```yaml
# Change the default primary and secondary colours used in EssentialsX messages.
# Some messages may use custom colours, which will need to be edited in the appropriate message files.
# For more information on customising messages, see https://essentialsx.net/wiki/Locale.html
message-colors:
  primary: '#ffaa00'
  secondary: '#ff5555'
```

### Changing the text content

If you want to make more advanced changes to messages, you can create custom message files under the `plugins/Essentials` folder.  
In this directory, create an empty file named `messages_<lang>.properties`, where `<lang>` is the language code for the language you want to edit.  
You can now insert any customised messages in this file, and they will be loaded by EssentialsX the next time you restart your server. For example:

```properties
TODOInsertExampleHere=<gold>aaaaaaaaa
```

Note the numbers in curly braces (ie `{0}`, `{1}`). These are template placeholders, which EssentialsX will replace as appropriate before displaying the message. You can compare the messages in the default message files with the appearance in-game to determine which messages are needed.

You can search through the default messages files on [GitHub](https://github.com/EssentialsX/Essentials/tree/2.x/Essentials/src/main/resources). We strongly recommend copying only the messages you want to edit, as this will make it easier to manage and update these files across EssentialsX versions.

**Note: do not edit any messages files directly inside the EssentialsX jar. You will lose these changes when you update the plugin and they will not be converted to the new MiniMessage format automatically.**

### Using rich text elements

**NEW IN 2.21.0:** EssentialsX now supports the MiniMessage syntax for its messages. This allows you to include gradients, hoverable and clickable elements, custom fonts and more!

TODO: examples here + link to minimessage wiki

# TODO: sections below here haven't been reviewed/edited, remove if redundant

## Example

Let's say you simply want to change the way currency is output so that the currency symbol comes AFTER the balance:

- Be sure to read the information above regarding custom locales/messages.
- Locate the line "currency={0}{1}"
- Switch the numbers around, it should now read "currency={1}{0}". {1} is the amount, {0} is the currency symbol. You can have spaces here too, if you want.
- Save the file and restart the server or issue /ess reload.

## Disabling Messages

Most user messages can be disabled or hidden simply by setting the message string to blank, for example:

```properties
noNewMail=
```

## Contributing

If you wish to contribute translations, you can do so using [Crowdin](https://crowdin.com/project/essentialsx-official).

## Other files

### plugin.yml

Aside from the messages file, there are a few other locations or settings you may want to change. The EssentialsX help system automatically reads each plugin's `plugin.yml`, including its own, and uses these files to display the syntax and command descriptions. To have a complete in-game translation, you may want to update these files to your native language.

### Config file

There are a number of settings in EssentialsX which can be altered by editing `plugins/Essentials/config.yml`, such as the currency format. These are independent of the `locale` setting, and can be changed without editing the jar file.

### Text commands

EssentialsX's text commands like `/motd` and `/rules` can be edited completely separately from the messages files and the config. Simply run the command in-game once, then find the corresponding text file inside `plugins/Essentials` to edit it.
