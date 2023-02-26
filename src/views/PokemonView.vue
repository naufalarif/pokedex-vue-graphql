<script lang="ts">
import { firstUC, generateID, generateImage } from '@/utils';
import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag'
import { computed } from 'vue';

export default {
  props: {
    slug: String
  },
  methods: {
    getDetailPokemonQuery() {
      
    }
  },
  setup(props) {
    const POKEMON_QUERY = gql`
      query samplePokeAPIquery {
        pokemon_v2_pokemonsprites(where: {pokemon_v2_pokemon: {name: {_eq: "${props.slug}"}}}) {
          id
          pokemon_v2_pokemon {
            name
          }
          sprites
        }
      }
    `
    const { result, loading, error } = useQuery(POKEMON_QUERY);
    const pokemon = computed(() => result.value);
    const name = computed(() => result.value.pokemon_v2_pokemonsprites ? firstUC(result.value.pokemon_v2_pokemonsprites[0].pokemon_v2_pokemon.name) : '')
    const id = computed(() => result.value.pokemon_v2_pokemonsprites ? generateID(result.value.pokemon_v2_pokemonsprites[0].id) : '')
    const imgUrl = computed(() => result.value.pokemon_v2_pokemonsprites ? generateImage(result.value.pokemon_v2_pokemonsprites[0]) : '')

    console.log({ result: result.value })
    return {
      name,
      id,
      imgUrl,
      result,
      loading,
      error,
      pokemon,
    }
  },
  watch: {
    result() {
      console.log(this.result)
    }
  }
}
</script>

<template>
  <div v-if="loading">
    <p>Loading...</p>
  </div>
  <div v-if="error">
    <p>Something went wrong</p>
  </div>
  <div v-if="result" class="pokemon">
    <RouterLink to="/" class="ic-back">
      <div>
        <img src="../assets/ic-back.png" />
      </div>
    </RouterLink>
    <h1>{{ name }}</h1>
    <p>{{ id }}</p>
    <div class="image">
      <img :src="imgUrl" />
    </div>
  </div>
</template>

<style scoped>
.pokemon {
  text-align: center;
}
h1 {
  font-weight: bolder;
}
.image {
  background-color: #bcdad9;
  border-radius: 8px;
}
.image img {
  width: 400px;
  max-width: 100%;
}
.ic-back {
  position: absolute;
  top: 12px;
  display: flex;
  place-items: center;
  z-index: 1;
}
.ic-back img {
  width: 24px;
  max-width: 100%;
}
</style>