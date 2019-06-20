
export default function({ store, redirect, route }) {
  console.log(store.state);
  store.state.user != null && route.name == 'signin' ? redirect('/') : ''
  store.state.user == null && route.name != 'signin' ? redirect('/signin') : ''
}