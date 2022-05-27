<template>
  <b-container>
    <b-row>
      <b-col md="12">
        <h1 class="mb-5 page-title">
          {{ item.title }}
        </h1>
      </b-col>
      <b-col md="3">
        <img width="100%" :src="item.img" />
        <div class="image-bottom">
          {{ item.title }}
        </div>
      </b-col>
      <b-col md="9">
        <h2>{{ item.title }}</h2>
        <div class="content">
          <div class="text" v-html="item.content"></div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { getManagerDetail } from '../http/requests/team'
export default {
  layout: 'page',
  data() {
    return {
      title: 'Тренеры компании PM Expert',
      item: {},
    }
  },
  created() {
    this.loadData(this.$route.params.id)
  },
  methods: {
    loadData(id) {
      getManagerDetail(id).then((response) => {
        this.item = response.data.payload.newspaper
        this.$store.commit('pageTitle', this.item.title)
      })
    },
  },
}
</script>
<style lang="scss" scoped>
.image-bottom {
  width: 100%;
  padding: 20px 10px;
  background-color: #f6f7fa;
  font-weight: bold;
}
</style>
