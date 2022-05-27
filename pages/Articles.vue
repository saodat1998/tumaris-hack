<template>
  <div>
    <div>
      <h2 class="my-4 page-sub-title">{{ title }}</h2>
      <b-row>
        <b-col v-for="item in getArticlesItems" :key="item.title" md="4">
          <price-card :item="item" />
        </b-col>
      </b-row>
      <hr />
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import PriceCard from '../components/card_blocks/PriceCard'
export default {
  components: { PriceCard },
  layout: 'leftsided',
  data() {
    return {
      title: 'Новости и публикации',
    }
  },
  computed: {
    ...mapGetters('articles', ['getArticlesItems']),
  },
  created() {
    this.$store.commit('pageTitle', this.title)
    this.loadArticlesList()
  },
  methods: {
    ...mapActions('articles', ['loadArticlesList']),
  },
}
</script>
<style lang="scss" scoped>
.page-sub-title {
  font-size: 20px;
}
</style>
