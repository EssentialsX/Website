EssentialsX stores all its messages as templates in the messages file, and comes with support for [many languages already built-in](#Supported-languages). These files can be easily replaced or extended to customize your server by placing them in the `plugins/Essentials/` folder.

# Translations
## Switching language
You can tell EssentialsX which language you want it to use by changing the `locale` setting in `config.yml`:
```yaml
# Set the locale for all messages.
# ...
locale: de
```

Remember that you need to **uncomment** the `locale: ` line by **removing the `#` in front of it**. If the `#` is present, EssentialsX will try to use the language your system is set to.

Below is a list of languages that EssentialsX supports:

## Supported languages
* **Standard (US) English**: `en`
  - **UK**: `en_GB`
* **Czech**: `cs`
* **Danish**: `da`
* **German**: `de`
* **Spanish**: `es`
* **Estonian**: `et`
* **Finnish**: `fi`
* **French**: `fr`
* **Hungarian**: `hu`
* **Italian**: `it`
* **Korean**: `ko`
* **Lithuanian**: `lt`
* **Dutch**: `nl`
* **Polish**: `pl`
* **Portuguese**: `pt`
  - Brazil: `pt_BR`
* **Romanian**: `ro`
* **Russian**: `ru`
* **Swedish**: `sv`
* **Turkish** `tr`
* Chinese:
  - `zh` for **modern Chinese**,
  - `zh_HK` for **Hong Kong**, and
  - `zh_TW` for **traditional Chinese**

## Defining Locale
There are many reasons you may want to add or modify the messages file in EssentialsX. Virtually all messages and formatting are defined here, so you can modify this file if you want to change the look and feel of the plugin. EssentialsX bundles several messages files in different locales inside the jar, so you can get a copy of the locale by extracting it from the main EssentialsX jar. Simply take the locale you want to change, place it in the `plugins/Essentials/` folder and start editing. Remember that the file is updated quite regularly; you might want to keep a backup of the file and use a diff tool to allow easy updates.

If you decide you can improve the existing translation of EssentialsX, or want to submit your translation for bundling, feel free to submit your altered locale file back to EssentialsX. EssentialsX often changes and improves, and it's quite easy for language files to be left behind when the developers don't use the language. You can submit your improved locale file over on our [Crowdin page](https://crowdin.com/project/essentialsx-official).

## Custom Messages
It is also possible to use the messages files for servers to define custom messages. This can give a server a more customised feel, and can be used to chance the colour scheme of EssentialsX messages.

You can find the latest messages files inside the EssentialsX jar.

Simply place your edited locale file (with appropriate local suffix) in the Essentials plugin folder, and make sure the locale setting in the config file matches (`locale: en` -> `messages_en.properties`), then restart the server.

If you are having trouble, [try this tutorial video](https://www.youtube.com/watch?v=9Uan2oJ9zK8). Note that this video is for the original Essentials plugin, not EssentialsX.

## Minor Changes
When EssentialsX looks for a message, if it is missing from your version, it will instead use the **built-in version**.
This means that if you only want to change a few messages instead of the whole translation, you can do this by making a copy of the locale file you're using in `plugins/Essentials/` and deleting all messages in the file, other than the ones you want to change. This means you don't have to worry about keeping your messages file up to date with every EssentialsX update.

When editing only a few keys, the process should look something like [this](http://wiki.ess3.net/w/images/0/0c/Locale.PNG).

## Colours
If you decide to edit the locale files with a standard text editor, you may notice lots of text like '\u00a7'. These are Unicode character escapes, which allow you to represent symbols and letters which do not exist in ASCII within an ASCII file. The most common of these you will see is '\u00a7' which represents the **section symbol** (&sect;), used in Minecraft to make colour codes.

Most Java IDE's will do the conversion to and from Unicode automatically.

## Editing Locale
If you are unhappy with a translation, or otherwise just want to modify messages, the easiest way to do this is to take a copy of the locale file your using, and place it in the Essentials folder. Essentials will give a locale file placed in this folder priority over the ones shipped inside of the jar file. This means you can make modifications to messages without too much worry about them becoming out of date.

You will generally need to periodically update the file, to deal with things such as parameter changes, or changes to the actual syntax of the messages. This is best done with a diff tool like [diffuse](http://diffuse.sourceforge.net/screenshots.html), which highlights changes between two text files.


### Example
Let's say you simply want to change the way currency is output so that the currency symbol comes AFTER the balance:

* Be sure to read the information above regarding custom locales/messages.
* Locate the line "currency={0}{1}"
* Switch the numbers around, it should now read "currency={1}{0}". {1} is the amount, {0} is the currency symbol. You can have spaces here too, if you want.
* Save the file and restart the server or issue /ess reload.

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