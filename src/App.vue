<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { auth, db } from './firebase'
import { mapMutations } from 'vuex'

export default {
  name: 'app',
  methods: {
    ...mapMutations(['setUserToken', 'setUserStatus']),
    setUser: function() {
      this.$store.dispatch('setUser')
    }
  },
  created() {
    this.setUser()
    auth.onAuthStateChanged(async user => {
      if (user) {
        const token = await user.getIdToken()
        const idTokenResult = await user.getIdTokenResult()
        const hasuraClaim = idTokenResult.claims['https://hasura.io/jwt/claims']
        console.log(idTokenResult)
        console.log(hasuraClaim)

        if (hasuraClaim) {
          this.setUserToken(token)
          this.setUserStatus('in')
        } else {
          const metadataRef = db.collection('metadata').doc(user.uid)

          metadataRef
            .get()
            .then(async doc => {
              if (doc.exists && doc.data().refreshTime) {
                const token = await user.getIdToken(true)
                this.setUserToken(token)
                this.setUserStatus('in')
              } else {
                // console.log('Refresh time doesnt exist')
                this.setUserToken(null)
                this.setUserStatus('out')
              }
            })
            .catch(error => {
              console.log('Error getting refresh time ', error)
            })
        }
      }
    })
  }
}
</script>

<style></style>
