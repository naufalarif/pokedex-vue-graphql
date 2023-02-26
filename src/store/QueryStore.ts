import { defineStore } from "pinia";

export const useQueryStore = defineStore("QueryStore", {
  state: () => {
    return {
      query: ''
    }
  },
  getters: {
    querySearch: (state) => state.query,
  },
  actions: {
    search(query: string) {
      this.query = query;
    }
  },
})