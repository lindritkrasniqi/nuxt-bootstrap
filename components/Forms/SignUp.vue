<template>
  <b-form @submit.prevent="onSubmit">
    <b-form-group
      id="fieldset-horizontal"
      label="Name:"
      label-for="name"
      label-cols-sm="4"
      label-cols-lg="4"
      content-cols-sm
      content-cols-lg="8"
      label-align-sm="right"
    >
      <b-form-input
        id="name"
        v-model="credentials.name"
        type="text"
        :class="$store.state.errors.error.name ? 'is-invalid' : ''"
        :disabled="loading"
      />
      <b-form-invalid-feedback
        v-if="$store.state.errors.error.name"
        id="input-name-feedback"
        class="font-weight-bold"
      >
        {{ $store.state.errors.error.name.toString() }}
      </b-form-invalid-feedback>
    </b-form-group>

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
      label-for="password-confirmation"
      label-cols-sm="4"
      label-cols-lg="4"
      content-cols-sm
      content-cols-lg="8"
      label-align-sm="right"
    >
      <b-form-input
        id="password-confirmation"
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
        <span v-else>Sign up</span>
      </b-button>
    </b-form-group>

    <nuxt-link class="float-right" :to="{ name: 'accounts-login' }">
      Already have an account?
    </nuxt-link>
  </b-form>
</template>

<script>
export default {
  data () {
    return {
      credentials: {
        name: '',
        email: '',
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

      this.$axios
        .post('register', this.credentials)
        .then(() =>
          this.$auth
            .loginWith('laravelSanctum', { data: this.credentials })
            .then(() => this.$auth.redirect('home'))
        )
        .catch(() => (this.loading = !this.loading))
    }
  }
}
</script>
