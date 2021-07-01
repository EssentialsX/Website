<template>
  <b-navbar id="main-navbar" type="is-dark" spaced wrapper-class="container">
    <template #brand>
      <b-navbar-item tag="nuxt-link" :to="{ path: '/' }">
        <img src="@/assets/images/logo-navbar.png" />
      </b-navbar-item>
    </template>
    <template #end>
      <b-navbar-item tag="nuxt-link" to="/downloads">Download</b-navbar-item>
      <b-navbar-item tag="nuxt-link" to="/docs/2.x">
        Documentation
      </b-navbar-item>
      <b-navbar-item tag="nuxt-link" to="/get-help">Get help</b-navbar-item>
      <b-navbar-item tag="nuxt-link" to="/support-us">Support us</b-navbar-item>
    </template>
  </b-navbar>
</template>
