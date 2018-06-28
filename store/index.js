import Vuex from 'vuex'

const store = () => new Vuex.Store({
    state: {
      items: null,
      page: 1,
      per_page: 3
    },
    getters: {
      items: (state) => state.items,
      page: (state) => state.page
    },
    mutations: {
      setItems (state, items) { state.items = items },
      setPage (state, page) { state.page = page }
    },
    actions: {
      async getItems ({ state, commit }) {
        const response = await this.$axios.$get(
          'https://qiita.com/api/v2/tags/nuxt.js/items', {
            headers: {'Content-Type': 'application/json'},
            params: {
              page: state.page,
              per_page: state.per_page 
            }
          }
        )
        commit('setItems', response)
      },
    }
})
export default store