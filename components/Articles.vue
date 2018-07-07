<template>
  <div class="container">
    <article-card class="container article" v-for="(article, index) in articles" :key="index" :article="article"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ArticleCard from '~/components/ArticleCard.vue'

export default {
  components: {
    ArticleCard
  },
  computed: {
    ...mapGetters(['articles']),
  }
}
</script>

<style>
.article {
  margin-top: 15px;
}
</style>
