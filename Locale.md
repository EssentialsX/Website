The Essentials project has made a effort to move all internal messages to a single location.  Throughout the code, everything from syntax errors to teleport requests, have been stripped out and replaced with a locale happy message template.
Any code that is not currently in development should have its messages displaced to a single translation file.  Essentials ships with several copies of this file, with one file per locale, but you can replace, extend or add locale files by placing them in the Essentials plugin folder.

# Translations
## Switching Locale
You can tell Essentials which locale you want it to use by setting the 'locale' option in the Essentials config file.  If you do not set this option Essentials will choose the default locale of the system the server is running on.

##### **If you try to switch the locale in the config file, make sure to uncomment the line, as commented it will automatically detect the locale.**

## Available Locales
* English: 'en' for generic English language, 'en_GB' for GB English, 'en_US' for US English<br>
* Czech: 'cs'
* Danish: 'da'
* German: 'de'
* Spanish: 'es'
* Estonian 'et'
* Finnish: 'fi'
* French: 'fr'
* Hungarian 'hu'
* Italian: 'it'
* Korean 'ko'
* Lithuanian 'lt'
* Dutch: 'nl'
* Polish: 'pl'
* Portugese: 'pt', 'pt_BR' for Brazil
* Romanian: 'ro'
* Russian 'ru'
* Swedish; 'sv'
* Turkish 'tr'
* Chinese: 'zh' for modern Chinese, 'zh_HK' for Hong Kong, and 'zh_TW' for traditional Chinese

## Defining Locale
There are many reasons to add or modify the locale file in Essentials, virtually all messages and formatting are defined here, so you can modify this file if you want to change the look and feel of Essentials.  Essentials bundles some common locales inside the jar, you can find the latest locale files [on github](https://github.com/EssentialsX/Essentials/tree/2.x/Essentials/src). Simply take the locale you want to change, place it in the Essentials folder and start editing, although remember that the file is updated quite regularly so you might want to keep a backup of the file and use a diff tool to allow easy updates.

If you decide you can improve the existing translation of Essentials, or want to submit your translation for bundling, feel free to submit your altered locale file back to Essentials.  Essentials is always always evolving and it's quite easy for language files to be left behind when the developers don't use the language.  You can submit your improved locale file [http://translate2.ess3.net/ here]

## Custom Messages
It is also possible to use the messages files for servers to define custom messages.  This can give a server a more customised feel, and can be used to colour scheme the Essentials messages.

You can find the latest messages files [on github](https://github.com/EssentialsX/Essentials/tree/2.x/Essentials/src).

Simply place your edited locale file (with appropriate local suffix) in the Essentials plugin folder, and make sure the locale setting in the config file matches (normally messages_en.properties), then restart the server.

If you are having trouble, [try this tutorial video](https://www.youtube.com/watch?v=9Uan2oJ9zK8).

## Minor Changes
If you only want to modify one or two messages instead of the entire translation, you can do this by making a copy of the locale file your using, and deleting all messages in the file, other than the ones you want to change.  This means that when Essentials goes looking for a message, if it is missing from your version, '''it will instead use the version that it is shipped with'''.  This means you have a virtually maintenance free way to modify just a few messages, that you are normally unhappy with.

When editing only a few keys, the process should look something like [this](http://wiki.ess3.net/w/images/0/0c/Locale.PNG)

## Colours
If you decide to edit the locale files with a standard text editor, you may notice lots of text like '\u00a7'.  These are Unicode character escapes, this is how you represent symbols and letters in ascii which do not exist in ascii.  The most common of these you will see is '\u00a7' which represents the section symbol (ยง) which is used in Minecraft to make colour codes.

Most Java IDE's will do the conversion to and from Unicode automatically.

## Editing Locale
If you are unhappy with a translation, or otherwise just want to modify messages, the easiest way to do this is to take a copy of the locale file your using, and place it in the Essentials folder.  Essentials will give a locale file placed in this folder priority over the ones shipped inside of the jar file.  This means you can make modifications to messages without too much worry about them becoming out of date.

You will generally need to periodically update the file, to deal with things such as parameter changes, or changes to the actual syntax of the messages.  This is best done with a diff tool like [diffuse](http://diffuse.sourceforge.net/screenshots.html), which highlights changes between two text files.


### `Example`
Let's say you simply want to change the way currency is output so that the currency symbol comes AFTER the balance:

* Be sure to read the information above regarding custom locales/messages.
* Locate the line "currency={0}{1}"
* Switch the numbers around, it should now read "currency={1}{0}". {1} is the amount, {0} is the currency symbol. You can have spaces here too, if you want.
* Save the file and restart the server or issue /ess reload.

## Disabling Messages
Most user messages can be disabled or hidden simply by setting the message string to blank, for example:
  noNewMail=

## Other files
### plugin.yml
On top of the locale file there are a few other locations or settings you might want to look into.  The essentials help system automatically parses each plugin's plugin.yml including it's own.  It is from these files that the syntax and command descriptions are from.  To have a complete in-game translation you may want to update these files to your native language.
### Config file
There are a number of settings in the essentials config which can be altered by editing the config file, such as the MOTD or the Rules.  These are independent of the Locale setting, and can be changed without editing the jar file.