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
      label-cols-sm="4"
      label-cols-lg="4"
      content-cols-sm
      content-cols-lg="8"
      label-align-sm="right"
    >
      <b-form-checkbox
        id="checkbox-1"
        v-model="credentials.remember"
        name="checkbox-1"
        value="accepted"
        unchecked-value="not_accepted"
      >
        Remember Me
      </b-form-checkbox>
    </b-form-group>

    <b-form-group
      label-cols-sm="4"
      label-cols-lg="4"
      content-cols-sm
      content-cols-lg="8"
      label-align-sm="right"
    >
      <b-button variant="primary" :to="{ name: 'accounts-signup' }" :disabled="loading">
        Sign up
      </b-button>
      <b-button
        type="submit"
        variant="wight"
        class="btn-outline-primary"
        :disabled="loading"
      >
        <b-spinner v-if="loading" small class="mx-3" />
        <span v-else>Login</span>
      </b-button>
    </b-form-group>

    <nuxt-link class="float-right" :to="{ name: 'accounts-forgot' }">
      Forgot the password?
    </nuxt-link>
  </b-form>
</template>

<script>
export default {
  data () {
    return {
      credentials: {
        email: '',
        password: '',
        remember: false
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

      this.$auth
        .loginWith('laravelSanctum', { data: this.credentials })
        .then(() => this.$auth.redirect('home'))
        .catch(() => (this.loading = !this.loading))
    }
  }
}
</script>
