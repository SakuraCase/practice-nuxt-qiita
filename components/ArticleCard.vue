<template>
  <div class="card">
    <header class="card-header">
      <figure class="image is-48x48"><img :src="profileImage()"></figure>
      <a class="card-header-title" :href="url()"> {{ article.title }}</a>
    </header>
    <div class="card-content">
      <div class="content">{{ article.body }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['article'],
  methods: {
    profileImage () {
      return this.article.user.profile_image_url
    },
    url () {
      return this.article.url
    }
  }
}
</script>

<style lang="scss" scoped>
  .content{
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }
  .card-header {
    background: #eedd82;
  }
</style>