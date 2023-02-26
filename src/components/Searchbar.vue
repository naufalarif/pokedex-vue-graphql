<script lang="ts">
import { useQueryStore } from '@/store/QueryStore';
import { storeToRefs } from 'pinia';

export default {
  name: "search-bar",
  setup() {
    const { query } = storeToRefs(useQueryStore())
    return { query }
  },
}

</script>

<template>
  <div class="searchbar" data-cy="searchbar">
    <div class="search">
      <img 
        src="../assets/ic-search.png"
        alt="search-icon"
        width="24"
        height="24"
      />
      <input v-model="query" placeholder="Name or number" />
    </div>
  </div>
</template>

<style scoped>
  .search-bar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .search {
    display: flex;
    align-items: center;
    background-color: var(--vt-c-turqoise-dark);
    padding: 16px;
    border-radius: 8px;
  }
  .search img {
    width: 24px;
    max-width: 100%;
    margin-right: 1rem;
  }
  .search input {
    background-color: transparent;
    border: none;
    width: 100%;
    padding: 6px 0;
  }
  .search input:focus {
    outline: none;
  }
</style>