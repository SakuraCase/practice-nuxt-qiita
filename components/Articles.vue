<template>
  <div>
    {{ articles[0].title }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
//import Article from '~/components/Article.vue'

export default {
  components: {
    //Article
  },
  computed: {
    ...mapGetters(['articles']),
  }
}
</script>

<style>
</style>
