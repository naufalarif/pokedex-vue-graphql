<script lang="ts">
import { firstUC, generateID, generateImage } from '@/utils';
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';

export default defineComponent({
  props: {
    pokemon: {
      readonly: true,
      type: Object
    }
  },
  components: {
    RouterLink,
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
  <RouterLink :to="name.toLowerCase()" class="pokemon-item">
    <div>
      <img 
        :src="imgUrl"
      />
      <h2>{{ name }}</h2>
      <p>{{ id }}</p>
    </div>
  </RouterLink>
</template>

<style scoped>
.pokemon-item {
  background-color: #bcdad9;
  border-radius: 8px;
  text-align: center;
  padding: 8px;
  flex-basis: 24%;
  margin-bottom: 1%;
}
.pokemon-item img {
  width: 250px;
  max-width: 100%;
}
h2 {
  font-weight: bolder;
  color: var(--vt-c-text-dark);
}
@media only screen and (max-width: 820px) {
  .pokemon-item {
    flex-basis: 23%;
  }
}
@media only screen and (max-width: 720px) {
  .pokemon-item {
    flex-basis: 49%;
  }
  h2 {
    font-size: 18px;
  }
} 
@media only screen and (max-width: 280px) {
  .pokemon-item {
    flex-basis: 100%;
  }
}
</style>