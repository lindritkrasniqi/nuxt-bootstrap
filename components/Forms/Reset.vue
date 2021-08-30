<template>
  <b-form @submit.prevent="onSubmit">
    <b-form-group
      id="password-group"
      label="Password:"
      label-for="password"
      label-cols-sm="4"
      label-cols-lg="4"
      content-cols-sm
      content-cols-lg="8"
      label-align-sm="right"
    >
      <b-form-input
        id="password"
        v-model="credentials.password"
        type="password"
        :class="$store.state.errors.error.password ? 'is-invalid' : ''"
        :disabled="loading"
      />
      <b-form-invalid-feedback
        v-if="$store.state.errors.error.password"
        id="input-password-feedback"
        class="font-weight-bold"
      >
        {{ $store.state.errors.error.password.toString() }}
      </b-form-invalid-feedback>
    </b-form-group>

    <b-form-group
      id="password-group"
      label="Password confirm:"
      label-for="password"
      label-cols-sm="4"
      label-cols-lg="4"
      content-cols-sm
      content-cols-lg="8"
      label-align-sm="right"
    >
      <b-form-input
        id="password"
        v-model="credentials.password_confirmation"
        type="password"
        :disabled="loading"
      />
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
        <span v-else>Save</span>
      </b-button>
    </b-form-group>

    <nuxt-link class="float-right" :to="{ name: 'index' }">
      Back to home!
    </nuxt-link>
  </b-form>
</template>

<script>
export default {
  data () {
    return {
      credentials: {
        password: '',
        password_confirmation: ''
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

      this.credentials.email = this.$route.query.email
      this.credentials.token = this.$route.query.token

      this.$axios
        .post('reset', this.credentials)
        .then(() => this.$router.push({ name: 'accounts-login' }))
        .catch(() => (this.loading = !this.loading))
    }
  }
}
</script>
