/* eslint-disable vue/require-prop-types */
<template>
  <b-container>
    <b-row
      style="height: 100vh"
      class="d-flex justify-content-center align-content-center"
    >
      <b-col class="text-center">
        <h3>{{ error.message }} | {{ error.statusCode }}</h3>
        <nuxt-link :to="{ name: 'index' }" class="text-decoration-none">
          Go back to home
        </nuxt-link>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default () { return { } }
    }
  },

  head () {
    return {
      title: this.error.message
    }
  }
}
</script>
