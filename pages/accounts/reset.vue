<template>
  <b-col cols="12" md="6">
    <b-card
      class="shadow rounded-lg"
      header="Reset password"
      header-class="text-center font-weight-bold"
    >
      <NuxtLogo />
      <br>
      <FormsReset />
    </b-card>
  </b-col>
</template>

<script>
export default {
  auth: false,

  middleware: ['reset'],

  head () {
    return { title: 'Reset password' }
  }
}
</script>
