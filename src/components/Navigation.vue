<template>
<div id="navigation">
  <b-navbar type="dark" variant="dark">
    <b-navbar-nav>
      <b-nav-item>    
        <router-link class="spacing" v-for="routes in links"
        v-bind:key="routes.id"
        :to="`${routes.page}`">{{routes.text}}  </router-link>
      </b-nav-item>
    </b-navbar-nav>
  </b-navbar>
    <router-view></router-view>
</div>

</template>

<script>
export default {
  name: 'navigation',
  data() {
    return {
      links: [
        {
          id: 0,
          text: 'Home',
          page: '/'
        },
        {
          id: 1,
          text: 'Create',
          page: '/create'
        },
        {
          id: 2,
          text: 'Search',
          page: '/search'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .spacing {
    margin-right: 15px;
    font-size: 20px;
  }

@import'~bootstrap/dist/css/bootstrap.css'
</style>