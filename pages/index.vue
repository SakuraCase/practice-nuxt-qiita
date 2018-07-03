<template>
  <div>
    <pagination/>
    {{ items }}
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
import Pagination from '~/components/Pagination.vue'

export default {
  components: {
    Pagination
  },
  async asyncData({ param, store }) {
    await store.dispatch('getItems')
    return {
    }
  },
  methods: {
    ...mapActions(['getItems']),
  },
  computed: {
    ...mapGetters(['items']),
  }
}
</script>

<style>
</style>
