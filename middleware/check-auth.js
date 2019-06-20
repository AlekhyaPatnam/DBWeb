import { auth } from '../plugins/firebase'

export default function ({ isServer, store, req }) {
  // If nuxt generate, pass this middleware
  if (isServer && !req) return
  auth.onAuthStateChanged(user => {
    if (user) {
      console.log(user);
      store.commit('SET_USER', user);
    }
  })
}