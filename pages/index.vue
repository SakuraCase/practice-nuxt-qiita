<template>
  <div class="container">
    <pagination/>
    <articles/>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
import Pagination from '~/components/Pagination.vue'
import Articles from '~/components/Articles.vue'

export default {
  components: {
    Pagination,
    Articles
  },
  async fetch ({ store }) {
    await store.dispatch('getArticles')
  },
  methods: {
    ...mapActions(['getArticles']),
  }
}
</script>

<style>
</style>
