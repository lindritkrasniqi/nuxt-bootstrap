<template>
  <b-form @submit.prevent="onSubmit">
    <b-form-group
      id="fieldset-horizontal"
      label="Email address:"
      label-for="email"
      label-cols-sm="4"
      label-cols-lg="4"
      content-cols-sm
      content-cols-lg="8"
      label-align-sm="right"
    >
      <b-form-input
        id="email"
        v-model="credentials.email"
        type="email"
        :class="$store.state.errors.error.email ? 'is-invalid' : ''"
        :disabled="loading"
      />
      <b-form-invalid-feedback
        v-if="$store.state.errors.error.email"
        id="input-email-feedback"
        class="font-weight-bold"
      >
        {{ $store.state.errors.error.email.toString() }}
      </b-form-invalid-feedback>
    </b-form-group>

    <b-form-group
      label-cols-sm="4"
      label-cols-lg="4"
      content-cols-sm
      content-cols-lg="8"
      label-align-sm="right"
    >
      <b-button
        type="submit"
        variant="wight"
        class="btn-outline-primary"
        :disabled="loading"
      >
        <b-spinner v-if="loading" small class="mx-3" />
        <span v-else>Send</span>
      </b-button>
    </b-form-group>

    <nuxt-link class="float-right" :to="{ name: 'accounts-login' }">
      I think I remember my password!
    </nuxt-link>
  </b-form>
</template>

<script>
export default {
  data () {
    return {
      credentials: {
        email: ''
      },
      loading: false
    }
  },

  beforeDestroy () {
    this.$store.commit('errors/error', {})
  },

  methods: {
    onSubmit () {
      this.loading = !this.loading

      this.$axios
        .post('forgot', this.credentials)
        .then(() => this.$router.push({ name: 'index' }))
        .catch(() => (this.loading = !this.loading))
    }
  }
}
</script>
