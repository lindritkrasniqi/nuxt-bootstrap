<template>
  <b-col cols="12" md="6">
    <b-card
      class="shadow rounded-lg"
      header="Forgot password"
      header-class="text-center font-weight-bold"
    >
      <NuxtLogo />
      <br>
      <FormsForgot />
    </b-card>
  </b-col>
</template>

<script>
export default {
  auth: false,

  head () {
    return { title: 'Forgot password' }
  }
}
</script>
