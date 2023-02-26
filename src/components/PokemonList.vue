<script lang="ts">
import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'

import PokemonItem from './PokemonItem.vue';
import { storeToRefs } from 'pinia';
import { useQueryStore } from '@/store/QueryStore';

const POKEMON_QUERY = gql`
  query samplePokeAPIquery {
    pokemon_v2_pokemonsprites(limit: 12) {
      sprites
      id
      pokemon_v2_pokemon {
        name
      }
    }
  }
`

export default {
  components: {
    PokemonItem
  },
  props: {
    items: Array
  },
  computed: {
    displayPokemon() {
      return this.result.pokemon_v2_pokemonsprites;
    },
    filterPokemon() {
      return this.result.pokemon_v2_pokemonsprites.filter((pokemon: any) => 
        pokemon.pokemon_v2_pokemon.name.includes(this.query))
    },
  },
  setup() {
    const { result, loading, error } = useQuery(POKEMON_QUERY);
    const { query } = storeToRefs(useQueryStore());
    return {
      result,
      loading,
      error,
      query
    }
  },
}
</script>

<template>
  <div v-if="loading">
    <p>Loading...</p>
  </div>
  <div v-if="error">
    <p>Something went wrong</p>
  </div>
  <div v-if="result" class="list-pokemon">
    <div v-for="pokemon in !query ? displayPokemon : filterPokemon" :key="pokemon.id" class="pokemon">
      <PokemonItem :pokemon="pokemon" />
    </div>
  </div>
</template>

<style scoped>
  .list-pokemon {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 15px;
    margin-top: 3rem;
  }
  .pokemon {
    flex: 24%;
  }
</style>