<template>
  <div v-if="$auth.loggedIn">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand :to="{ name: 'index' }">
        NuxtJS with Bootstrap
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" />

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="https://nuxtjs.org" target="_blank">
            NuxtJS
          </b-nav-item>
          <b-nav-item href="https://bootstrap-vue.org" target="_blank">
            BootstrapVue
          </b-nav-item>
          <b-nav-item href="#" disabled>
            Disabled
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <b-avatar size="25" class="mr-1" />
              <em>{{ $auth.user.name }} </em>
            </template>
            <b-dropdown-item href="#">
              Profile
            </b-dropdown-item>
            <b-dropdown-item variant="danger" :to="{ name: 'accounts-logout' }">
              Sign Out
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <b-container>
      <br>
      <Nuxt />
    </b-container>
  </div>

  <b-container
    v-else
    style="height: 100vh"
    class="d-flex justify-content-center align-items-center"
  >
    <Nuxt />
  </b-container>
</template>

<style>
body {
  background-color: rgb(236, 236, 236);
}
</style>
