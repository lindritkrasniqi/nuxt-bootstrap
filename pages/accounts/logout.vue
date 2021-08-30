<template>
  <b-row>
    <b-col class="text-center">
      <NuxtLogo />

      <b-spinner label="Loading..." style="font-size: 10px" />
      <div class="mt-2 lead">
        {{ message }}
      </div>
    </b-col>
  </b-row>
</template>

<script>
export default {
  data () {
    return {
      message: 'Please wait...'
    }
  },

  head () {
    return {
      title: this.message
    }
  },
  created () {
    this.$auth.logout()
  }
}
</script>
