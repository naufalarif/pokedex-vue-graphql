<script lang="ts">
import PokemonList from '@/components/PokemonList.vue'
import SearchBar from '../components/Searchbar.vue'

export default {
  components: {
    PokemonList,
    SearchBar,
  },
}
</script>

<template>
  <main>
    <h1>Pokédex</h1>
    <p>Search for a Pokémon by name or using its National Pokédex number</p>
    <SearchBar />
    <PokemonList />
  </main>
</template>

<style scoped>
h1 {
  font-weight: bolder;
}
p {
  margin-bottom: 1rem;
}
</style>
