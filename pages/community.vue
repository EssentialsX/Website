<template>
    <div>
        <div class="hero is-primary">
            <div class="hero-body">
                <h1 class="title">Join the EssentialsX community</h1>
                <h2 class="subtitle">Need support with EssentialsX, or just want to chat about servers and plugins? We've got you covered.</h2>
            </div>
        </div>
        <div class="section">
            <div class="container">
                <div class="columns">
                    <div class="column is-two-thirds">
                        <div class="content">
                            <h2>Join the MOSS community on Discord</h2>
                            <p>
                                MOSS is one of the leading Discord communities for open source Minecraft projects and welcomes new members.
                            </p>
                            <p>
                                You can get support for several plugins including EssentialsX, plus chat to fellow server owners and plugin developers from across the globe!
                            </p>
                            <h2>Discuss EssentialsX on GitHub</h2>
                            <p>
                                Want to report a bug, request a feature or contribute to EssentialsX? You can join in the discussion on
                                <a href="https://github.com/EssentialsX/Essentials">GitHub.</a>
                            </p>
                            <h2>Visit us on Patreon</h2>
                            <p>
                                Feeling generous or just want to say hi? You can see news updates, chat to other patrons and leave comments for us over on our
                                <a href="https://patreon.com/EssentialsX">Patreon page.</a> You can also pledge to EssentialsX to help support the project.
                            </p>
                            <h2>EssentialsX on IRC</h2>
                            <p>
                                For all the old-fashioned folk out there, you can join <strong>#essentialsx</strong> over on <strong>irc.esper.net</strong>.
                                Note that the IRC channel is less active, so if you're looking for quick support, we strongly recommend joining MOSS on Discord instead.
                            </p>
                        </div>
                    </div>
                    <div class="column">
                        <Patreon />
                        <iframe style="height: 500px; margin-right: -1px" src="https://discordapp.com/widget?id=390942438061113344&theme=dark" width="768" height="600"></iframe>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import Patreon from "../components/Patreon";

export const attributes = {
    title: "Community"
};

export default {
    components: {
        Patreon
    }
};
</script>
