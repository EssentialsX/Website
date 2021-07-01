<template>
  <div>
    <div class="hero is-primary is-medium is-bold has-text-centered">
      <div class="hero-body">
        <p class="title">It's in the name.</p>
        <p class="subtitle">
          EssentialsX is the essential plugin suite for Minecraft servers, with over 130 commands for servers of all size and scale.
        </p>
      </div>
    </div>
    <div class="columns is-mobile">
      <card title="Free" icon="github">
        Open source on <a href="https://github.com/buefy/buefy"> GitHub </a>
      </card>

      <card title="Responsive" icon="cellphone-link" type="secondary">
        <b class="has-text-grey"> Every </b> component is responsive
      </card>

      <card title="Modern" icon="alert-decagram" type="tertiary">
        Built with <a href="https://vuejs.org/"> Vue.js </a> and
        <a href="http://bulma.io/"> Bulma </a>
      </card>

      <card title="Lightweight" icon="arrange-bring-to-front" type="info">
        No other internal dependency
      </card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  layout: 'no-container',
}
</script>
