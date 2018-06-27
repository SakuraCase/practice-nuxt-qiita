<template>
  <div>
    {{ items }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  async asyncData({ param, store }) {
    await store.dispatch('getItems')
    return {}
  },
  computed: {
    ...mapGetters(['items'])
  }
}
</script>

<style>
</style>
