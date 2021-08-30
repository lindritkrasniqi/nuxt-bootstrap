<template>
  <b-row v-if="$auth.loggedIn" class="justify-content-center">
    <b-col cols="12" md="8">
      <b-card class="shadow rounded-lg" header="Dashboard">
        <b-card-body class="lead">
          Welcome, {{ $auth.user.name }}!
        </b-card-body>
      </b-card>
    </b-col>
  </b-row>

  <b-col v-else cols="12" lg="6">
    <b-card class="shadow rounded-lg">
      <NuxtLogo />
      <br>
      <FormsLogin />
    </b-card>
  </b-col>
</template>

<script>
export default {
  layout: 'loggedIn',

  auth: false,

  head () {
    return {
      title: this.$auth.loggedIn ? 'Welcome' : 'NuxtJS with BootstrapVue'
    }
  }
}
</script>
