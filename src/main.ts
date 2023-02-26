import { createApp, provide, h } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { ApolloClient, InMemoryCache } from '@apollo/client/core'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const pinia = createPinia();

const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
  cache,
  uri: 'https://beta.pokeapi.co/graphql/v1beta'
});

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient)
  },
  render: () => h(App)
})

app.use(pinia)

app.use(router)

app.mount('#app')
