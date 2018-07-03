<template>
  <nav class="pagination is-centered" role="navigation">
    <a class="pagination-previous" @click="pagination(-1)" v-bind:disabled="isDisabled(-1)">Previous</a>
    <a class="pagination-next" @click="pagination(1)" v-bind:disabled="isDisabled(1)">Next</a>
    <ul class="pagination-list">
      <li><a class="pagination-link" @click="pagination(first-page)" v-bind:disabled="page <= first">{{ first }}</a></li>
      <li><span class="pagination-ellipsis">&hellip;</span></li>
      <li><a class="pagination-link" @click="pagination(-2)" v-bind:disabled="isDisabled(-2)">{{ pageNum(-2) }}</a></li>
      <li><a class="pagination-link" @click="pagination(-1)" v-bind:disabled="isDisabled(-1)">{{ pageNum(-1) }}</a></li>
      <li><a class="pagination-link is-current" @click="pagination(0)" v-bind:disabled="isDisabled(0)">{{ pageNum(0) }} </a></li>
      <li><a class="pagination-link" @click="pagination(1)" v-bind:disabled="isDisabled(1)">{{ pageNum(1) }}</a></li>
      <li><a class="pagination-link" @click="pagination(2)" v-bind:disabled="isDisabled(2)">{{ pageNum(2) }}</a></li>
      <li><span class="pagination-ellipsis">&hellip;</span></li>
      <li><a class="pagination-link" @click="pagination(last-page)" v-bind:disabled="page >= last">{{ last }}</a></li>
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