<template>
  <div>
    <div class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Authorize your EssentialsX Discord Bot</h1>
          <h2 class="subtitle">Enter the client ID from the Discord Developers site into the box below to add your bot to your Discord server.</h2>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <div class="columns">
          <div class="column">
            <div class="content">
              <h2>Authorize your EssentialsX Discord Bot with Discord</h2>
              <p>
                Enter your Client ID, which you should have copied from step two of the initial setup instructions,
                into the box below.
              </p>
              <p>
                Once you enter your Client ID into the box below, clicking "Authorize" will redirect you to Discord's
                website. On Discord's website, you'll be able to select from any server you have the "Manage Server"
                permission in to add it in. Once you've added the bot to a server, you can continue the next step in
                the initial setup.
              </p>
            </div>
          </div>
        </div>
        <div class="section">
          <div class="container">
            <section>
              <b-field position="is-centered">
                <b-input
                    ref="clientid"
                    placeholder="Client ID"
                    type="text"
                    required
                    validation-message="Client IDs must be between 18 and 19 digits long!"
                    pattern="^\d{18,19}$"
                    maxlength="19"/>
                <p class="control">
                  <b-button @click="redirect" class="button is-primary">Authorize</b-button>
                </p>
              </b-field>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export const attributes = {
  title: "Authorize Discord Bot"
};

export default {
  methods: {
    redirect() {
      if (/^\d{18}$/.test(this.$refs.clientid.newValue)) {
        window.location.href = "https://discord.com/api/oauth2/authorize?client_id=" + this.$refs.clientid.newValue +"&permissions=1006652432&scope=bot%20applications.commands";
      }
    }
  }
};
</script>
