import Vuex from 'vuex'

const store = () => new Vuex.Store({
    state: {
      articles: null,
      page: 1,
      per_page: 3
    },
    getters: {
      articles: (state) => state.articles,
      page: (state) => state.page
    },
    mutations: {
      setArticles (state, articles) { state.articles = articles },
      setPage (state, page) { state.page = page }
    },
    actions: {
      async getArticles ({ state, commit }) {
        const response = await this.$axios.$get(
          'https://qiita.com/api/v2/tags/nuxt.js/items', {
            headers: {'Content-Type': 'application/json'},
            params: {
              page: state.page,
              per_page: state.per_page 
            }
          }
        )
        commit('setArticles', response)
      },
    }
})
export default store