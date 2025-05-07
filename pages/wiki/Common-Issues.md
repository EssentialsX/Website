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
**Related issues: [#1458](https://github.com/EssentialsX/Essentials/issues/1458)**  
You can create an alias for commands using Bukkit's `commands.yml` file, which should be in your server root.

The example below does the following:
* Overrides `/gc` with [spark](https://github.com/lucko/spark)'s `/profiler` command
* Overrides `/tell` with the [vanilla `/tell`](https://minecraft.gamepedia.com/Commands/tell) command
* Forces `/msg` to run EssentialsX's `/msg` command
```yaml
aliases:
    gc:
    - "spark:profiler $1-"
    tell:
    - "minecraft:tell $1-"
    msg:
    - "essentials:msg $1-"
```

See the [Bukkit wiki page](https://bukkit.fandom.com/wiki/Commands.yml#aliases) for more information.

## Another plugin is overriding an EssentialsX command
Typically, if EssentialsX finds another plugin providing a command with the same name as one of EssentialsX's own commands, it will try and hand over that command to the other plugin. However, you can force EssentialsX to handle commands that are also provided by another plugin using the [`overridden-commands` section](https://github.com/EssentialsX/Essentials/blob/2.x/Essentials/src/main/resources/config.yml#L162) of your `config.yml`. This will tell EssentialsX not to "give up" the command to the other plugin.

For example, to force EssentialsX to handle the `/msg` command instead of passing it over to another plugin, your section should look like this:
```yaml
overridden-commands:
  - msg
```

Note that in some cases, you may also need to alias the command to the `essentials:` version of the command. [See above](https://github.com/EssentialsX/Essentials/wiki/Common-Issues#essentialsx-overrides-a-command-from-spigot-or-another-plugin) for details. In addition, if you have a plugin running on your proxy ([BungeeCord](https://www.spigotmc.org/wiki/bungeecord/)/[Waterfall](https://github.com/PaperMC/Waterfall) or [Velocity](https://velocitypowered.com)), the command may not even reach the server. EssentialsX can't do anything about this - you need to fix this on the proxy.

## Tab completion doesn't work for commands that override an EssentialsX command
**Related issues: [#1384](https://github.com/EssentialsX/Essentials/issues/1384)**  
You can alias the command to the version from the other plugin, which should fix tab complete behaviour - see above.

## I need help with GroupManager! <br /> Where's the updated GroupManager?
EssentialsX does not support GroupManager as it is an outdated and broken plugin. We recommend you switch to [LuckPerms](https://github.com/lucko/LuckPerms) as it is still an actively maintained and regularly updated plugin.

## How do I build EssentialsX?
Once you've ensured you have an up-to-date JDK and Maven installed, you need to build a few different Spigot versions using [Spigot BuildTools](https://www.spigotmc.org/wiki/buildtools/):
```bash
java -jar BuildTools.jar --rev 1.8
java -jar BuildTools.jar --rev 1.8.3
java -jar BuildTools.jar --rev 1.9
java -jar BuildTools.jar --rev 1.9.4
```

This is required to allow EssentialsX's compatibility providers can build against older versions of the Spigot server, and only needs to be done once.

Next, [download or clone EssentialsX](https://github.com/EssentialsX/Essentials), open a terminal in the root of the EssentialsX source and run:
```bash
./gradlew build
```

If this completes with no errors, you will be able to find each plugin jar in the `jars/` directory or, in `build/libs/` inside each module's directory.

## How do I add EssentialsX as a dependency?
### Repositories
Do you want to integrate with EssentialsX in your plugin? You can use the EssentialsX Maven repo to build against EssentialsX's API.

Releases are hosted on the Maven repo at `https://repo.essentialsx.net/releases/`, while snapshots (including dev builds) are hosted at `https://repo.essentialsx.net/snapshots/`.

To add EssentialsX to your build system, you should use the following artifacts:

| Type            | Group ID        | Artifact ID | Version         |
| :-------------- | :-------------- | :---------- | :-------------- |
| Latest release  | net.essentialsx | EssentialsX | 2.19.0
| Snapshots       | net.essentialsx | EssentialsX | 2.19.1-SNAPSHOT |
| Older releases  | net.ess3        | EssentialsX | 2.18.2          |

Note: up until 2.18.2, EssentialsX used the net.ess3 group ID, but starting with 2.19.0 snapshots, the group ID is now net.essentialsx. When updating your plugin, make sure you use the correct group ID.

### Releases
#### Maven
Under `repositories` in your `pom.xml`, you need to add a new `repository` for the EssentialsX CI server:
```xml
<repositories>
    ...
    <repository>
        <id>essentials-releases</id>
        <url>https://repo.essentialsx.net/releases/</url>
    </repository>
    <repository>
        <id>paper-repo</id>
        <url>https://papermc.io/repo/repository/maven-public/</url>
    </repository>
</repositories>
```

Next, add EssentialsX as a `dependency` under `dependencies`:
```xml
<dependencies>
    ...
    <dependency>
        <groupId>net.essentialsx</groupId>
        <artifactId>EssentialsX</artifactId>
        <version>2.19.0</version>
        <scope>provided</scope>
    </dependency>
</dependencies>
```

Make sure the dependency is `provided` - you don't want to include the whole of EssentialsX inside your plugin.

You should now be able to build against EssentialsX's API in your IDE - you may need to reimport your project for this to work.

#### Gradle
First, add the repository to your `build.gradle`:
```groovy
repositories {
    maven {
        name "essentialsx-releases"
        url "https://repo.essentialsx.net/releases/"
    }
    maven {
        name "papermc"
        url "https://papermc.io/repo/repository/maven-public/"
    }
}
```

Next, add the dependency as a `compileOnly` dependency:
```groovy
dependencies {
    ...
    compileOnly 'net.essentialsx:EssentialsX:2.19.0'
}
```

You should now be able to build against EssentialsX's API in your IDE.

### Snapshots 
#### Maven
Under `repositories` in your `pom.xml`, you need to add a new `repository` for the EssentialsX CI server:
```xml
<repositories>
    ...
    <repository>
        <id>essentials-snapshots</id>
        <url>https://repo.essentialsx.net/snapshots/</url>
    </repository>
    <repository>
        <id>paper-repo</id>
        <url>https://papermc.io/repo/repository/maven-public/</url>
    </repository>
</repositories>
```

Next, add EssentialsX as a `dependency` under `dependencies`:
```xml
<dependencies>
    ...
    <dependency>
        <groupId>net.essentialsx</groupId>
        <artifactId>EssentialsX</artifactId>
        <version>2.19.1-SNAPSHOT</version>
        <scope>provided</scope>
    </dependency>
</dependencies>
```

Make sure the dependency is `provided` - you don't want to include the whole of EssentialsX inside your plugin.

You should now be able to build against EssentialsX's API in your IDE - you may need to reimport your project for this to work.

#### Gradle
First, add the repository to your `build.gradle`:
```groovy
repositories {
    maven {
        name "essentialsx-snapshots"
        url "https://repo.essentialsx.net/snapshots/"
    }
    maven {
        name "papermc"
        url "https://papermc.io/repo/repository/maven-public/"
    }
}
```

Next, add the dependency as a `compileOnly` dependency:
```groovy
dependencies {
    ...
    compileOnly 'net.essentialsx:EssentialsX:2.19.1-SNAPSHOT'
}
```

You should now be able to build against EssentialsX's API in your IDE.
