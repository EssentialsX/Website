# EssentialsX Economy

EssentialsX comes with a simple, easy-to-use economy system built into the core plugin, that you can access mostly through commands (in detail below).

## Commands

There are a number of commands that players and admins can use in-game, including:
   - `/eco`, `/economy`: Allows admins to take, give, or reset any player's money.
   - `/sell`: Sells an item and amount at the price specified in the `worth.yml` file.
   - `/balance`, `/bal`, `/money`: Displays the current balance of a player.
   - `/baltop`, `/balancetop`: Displays a list of the people with the highest balance in your server.
   - `/pay`: Pays a specified player from your balance.

## Configuration

There are a number of different options related to EssentialsX's economy features which can be found in the `config.yml`.

Most of the config options are explained adequately in the comments:

```yml
# Defines the balance with which new players begin. Defaults to 0.
starting-balance: 0
# Defines the cost to use the given commands PER USE.
# Some commands like /repair have sub-costs, check the wiki for more information.
command-costs:
  # /example costs $1000 PER USE
  #example: 1000
  # /kit tools costs $1500 PER USE
  #kit-tools: 1500
# Set this to a currency symbol you want to use.
# Remember, if you want to use special characters in this document, 
# such as accented letters, you MUST save the file as UTF-8, not ANSI.
currency-symbol: '$'
# Enable this to make the currency symbol appear at the end of the amount rather than at the start.
# For example, the euro symbol typically appears after the current amount.
currency-symbol-suffix: false
# Set the maximum amount of money a player can have.
# The amount is always limited to 10 trillion because of the limitations of a java double.
max-money: 10000000000000
# Set the minimum amount of money a player can have (must be above the negative of max-money).
# Setting this to 0, will disable overdrafts/loans completely.  Users need 'essentials.eco.loan' perm to go below 0.
min-money: -10000
# Enable this to log all interactions with trade/buy/sell signs and sell command.
economy-log-enabled: false
# Enable this to also log all transactions from other plugins through Vault.
# This can cause the economy log to fill up quickly so should only be enabled for testing purposes!
economy-log-update-enabled: false
```

EssentialsX adds the ability to specify the minimum transaction amount to prevent the dreaded microtransactions:

```yml
# Minimum acceptable amount to be used in /pay.
minimum-pay-amount: 0.001
```

EssentialsX adds currency format to improve the localization. You may uncomment the `currency-symbol-format-locale` to use our preformatted styles or uncomment `currency-format` and create your own:

```yml
# The format of currency, excluding symbols. See currency-symbol-format-locale for symbol configuration.
#
# "#,##0.00" is how the majority of countries display currency.
#currency-format: "#,##0.00"
# Format currency symbols. Some locales use , and . interchangeably.
# Some formats do not display properly in-game due to faulty Minecraft font rendering.
#
# For 1.234,50 use de-DE
# For 1,234.50 use en-US
# For 1'234,50 use fr-ch
#currency-symbol-format-locale: en-US
```

### Permissions
Players need permissions to use economy commands. For example, you can grant them the `essentials.pay` permission to allow them to use `/pay`.

Permissions for other economy commands can be found on [the EssentialsX permissions list](https://essinfo.xeya.me/permissions.html) (community maintained list).

## Signs
Signs may be used to create shops where players can buy and sell items/blocks to and from the server in exchange for in-game money. Most economy commands can be used on signs, such as `[Buy]`, `[Sell]`, or `[Trade]`. You can find an in-depth tutorial at [the original Essentials wiki](https://wiki.mc-ess.net/wiki/Sign_Tutorial).

## For plugin developers 
EssentialsX's built-in economy API will redirect to any other detected economy system such as Vault. This means you can use EssentialsX's economy as a economy API instead of Vault if your plugin is dependent on EssentialsX.
