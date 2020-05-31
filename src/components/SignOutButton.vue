<template>
  <button @click="signOut">Sign Out</button>
</template>

<script>
import { auth } from '../firebase'
import { mapMutations } from 'vuex'

export default {
  name: 'SignOutButton',
  methods: {
    ...mapMutations(['setUserStatus', 'setUserToken']),
    signOut: async function() {
      try {
        this.setUserStatus('loading')
        this.setUserToken(null)
        await auth.signOut().then(() => {
          this.setUserStatus('out')
          this.$router.push('sign-in')
        })
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
