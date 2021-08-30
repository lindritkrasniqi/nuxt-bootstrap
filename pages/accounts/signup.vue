<template>
  <b-col cols="12" md="6">
    <b-card
      class="shadow rounded-lg"
      header="Sign up"
      header-class="text-center font-weight-bold"
    >
      <NuxtLogo />
      <br>
      <FormsSignUp />
    </b-card>
  </b-col>
</template>

<script>
export default {
  auth: false,

  head () {
    return { title: 'Sign up' }
  }
}
</script>
