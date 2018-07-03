<template>
  <nav class="pagination is-centered container" role="navigation">
    <a @click="pagination(-1)" v-bind:disabled="isDisabled(-1)" class="pagination-previous">Previous</a>
    <a @click="pagination(1)" v-bind:disabled="isDisabled(1)" class="pagination-next">Next</a>
    <ul class="pagination-list">
      <li><a @click="pagination(first-page)" v-bind:disabled="page < first" class="pagination-link">{{ first }}</a></li>
      <li><span class="pagination-ellipsis">&hellip;</span></li>
      <li><a @click="pagination(-2)" v-bind:disabled="isDisabled(-2)" class="pagination-link">{{ pageNum(-2) }}</a></li>
      <li><a @click="pagination(-1)" v-bind:disabled="isDisabled(-1)" class="pagination-link">{{ pageNum(-1) }}</a></li>
      <li><a @click="pagination(0)" v-bind:disabled="isDisabled(0)" class="pagination-link is-current">{{ pageNum(0) }} </a></li>
      <li><a @click="pagination(1)" v-bind:disabled="isDisabled(1)" class="pagination-link">{{ pageNum(1) }}</a></li>
      <li><a @click="pagination(2)" v-bind:disabled="isDisabled(2)" class="pagination-link">{{ pageNum(2) }}</a></li>
      <li><span class="pagination-ellipsis">&hellip;</span></li>
      <li><a @click="pagination(last-page)" v-bind:disabled="page > last" class="pagination-link">{{ last }}</a></li>
    </ul>
  </nav>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  data () {
    return {
      first: 1,
      last: 100
    }
  },
  methods: {
    ...mapActions(['getItems']),
    ...mapMutations(['setPage']),
    pagination (diff) {
      this.setPage(this.page + diff)
      this.getItems()
    },
    /** paginationsのボタン数値を返す。範囲外なら空文字を返す */
    pageNum(diff) {
      return this.isDisabled(diff)? "": this.page + diff
    },
    isDisabled (diff) {
      const p = this.page + diff
      return p < this.first || this.last < p
    }
  },
  computed: {
    ...mapGetters(['page']),
  }
}
</script>

<style>
</style>