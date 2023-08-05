<template>
    <div class="content">
        <div class="message is-danger">
            <div class="message-body">
                <p>
                    EssentialsX <b>does not support</b> the following Minecraft versions and server software:
                </p>
                <ul>
                    <li>🛑 <b>Do not use Mohist. Mohist tricks users into deleting official EssentialsX jars and installing unofficial modified software.</b> <saber-link to="/do-not-use-mohist.html">Click here for more information.</saber-link></li>
                    <li>🛑 <b>Magma modifies EssentialsX bytecode at runtime and includes hacks to fix other bugs in Magma.</b> If you encounter an issue with EssentialsX on Magma, please contact them for support.</li>
                    <li>🛑 <b>Other Forge/Fabric hybrid server software</b>, including <b>Cauldron</b>, <b>Thermos</b>, <b>CatServer</b> etc. - the Bukkit API does not properly support mods, and using Bukkit plugins on modded Forge/Fabric servers will cause significant problems.<br />For Forge servers, use <b><a href="https://www.spongepowered.org/downloads/spongeforge">SpongeForge</a></b> with <b><a href=https://nucleuspowered.org/>Nucleus</a></b> for plugin support and a complete Essentials replacement, or consider a mod designed for Forge such as <a href="https://www.curseforge.com/minecraft/mc-mods/ftb-essentials"><b>FTB Essentials</b></a>.</li>
                    <li>🛑 <b>Akarin, Yatopia and some other "high performance" Paper forks.</b> These servers include <b>dangerous non-standard behaviour</b>, which can not only impact EssentialsX's functionality but also cause damage to your worlds. If you need a high-performance server, use the latest version of Paper.</li>
                    <li>🛑 <b>1.7.10 or below</b> - you should use the original <a href="https://dev.bukkit.org/projects/essentials">Essentials</a>.</li>
                </ul>
                <p>
                    We will not be able to provide support if you use any of the software or versions listed above.
                </p>
            </div>
        </div>

        <div class="message is-info">
            <div class="message-body">
                <p>
                    EssentialsX officially supports the <b>CraftBukkit</b>, <b>Spigot</b> and <a href="https://papermc.io/"><b>Paper (recommended)</b></a> server software running the following Minecraft versions:
                </p>            
                <ul>
                    <li>✅ <b>1.19.4</b> and <b>1.20.1</b> - EssentialsX actively develops against and supports these versions.</li>
                    <li>⚠️ <b>1.8.8</b>, <b>1.9.4</b>, <b>1.10.2</b>, <b>1.11.2</b>, <b>1.12.2</b>, <b>1.13.2</b>, <b>1.14.4</b>, <b>1.15.2</b>, <b>1.16.5</b>, <b>1.17.1</b> and <b>1.18.2</b> - these versions are still supported, but are not a priority for us, and may be dropped in a future release.</li>
                </ul>
                <p>
                    <b>We strongly recommend using the latest version of Paper.</b> Paper includes countless bug fixes and performance improvements over Spigot and CraftBukkit, including fixing some non-vanilla behaviours, and EssentialsX takes advantage of more efficient <b>async teleports</b> and support for modern gameplay features which are only possible on Paper, not Spigot.
                </p>
            </div>
        </div>
    </div>
</template>
