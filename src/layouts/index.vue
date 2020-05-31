<template>
  <div>
    <router-link to="/">
      <button>Home</button>
    </router-link>
    <router-link
      to="/sign-in"
      v-if="!user"
    >
      <button>Sign In</button>
    </router-link>
    <router-link
      to="/sign-up"
      v-if="!user"
    >
      <button>Sign Up</button>
    </router-link>
    <SignOutButton v-if="user"></SignOutButton>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import SignOutButton from '../components/SignOutButton'
export default {
  name: 'Layout',
  components: {
    SignOutButton
  },
  computed: {
    user() {
      console.log(this.$store)
      return this.$store.getters.getUser
    }
  }
}
</script>

<style>
</style>
