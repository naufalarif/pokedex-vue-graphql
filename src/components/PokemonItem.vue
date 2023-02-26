<script lang="ts">
import { defineComponent } from 'vue';

const baseUrl = 'https://raw.githubusercontent.com/';
const pokeUrl = `${baseUrl}PokeAPI/sprites/master/`;
const emptyImgUrl = `${baseUrl}naufalarif/pokemon-app/master/public/imgs/pokeball.png`;

function generateID(id: number) {
  if (id < 10) return `00${id}`
  if (id > 10 && id < 100) return `0${id}`
  return id
}

function generateImage(data: any) {
  const imageObj = data ? JSON.parse(data.sprites) : '';
  const src = imageObj.other.home.front_default ? imageObj.other.home.front_default.replace('/media/', '') : '';
  const imgUrl = src ? `${pokeUrl}${src}` : emptyImgUrl;
  return imgUrl;
}

function firstUC(word: string) {
  const title = word.charAt(0).toUpperCase() + word.substring(1, word.length);
  return title;
}

export default defineComponent({
  props: {
    pokemon: {
      readonly: true,
      type: Object
    }
  },
  setup(props) {
    const name = props.pokemon ? firstUC(props.pokemon.pokemon_v2_pokemon.name) : '';
    const id = props.pokemon ? generateID(props.pokemon.id) : '';
    const imgUrl = generateImage(props.pokemon)
    return { name, id, imgUrl }
  },
});

</script>

<template>
  <div class="pokemon-item">
    <img 
      :src="imgUrl"
    />
    <h2>{{ name }}</h2>
    <p>{{ id }}</p>
  </div>
</template>

<style scoped>
.pokemon-item {
  background-color: #bcdad9;
  border-radius: 8px;
  text-align: center;
  padding: 8px;
}
.pokemon-item img {
  width: 250px;
  max-width: 100%;
}
h2 {
  font-weight: bolder;
  color: var(--vt-c-text-dark);
}
</style>