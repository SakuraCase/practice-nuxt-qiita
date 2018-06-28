<template>
  <div>
    <input v-model='currentPage'/>
    <button @click='pagination()'>SEARCH</button>
    {{ items }}
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  async asyncData({ param, store }) {
    await store.dispatch('getItems')
    return {
    }
  },
  methods: {
    ...mapActions(['getItems']),
    ...mapMutations(['setPage']),
    pagination () {
      this.getItems()
    }
  },
  computed: {
    ...mapGetters(['items', 'page']),
    currentPage: {
      get () {
        return this.page
      },
      set (page) {
        this.setPage(page)
      }
    }
  }
}
</script>

<style>
</style>
