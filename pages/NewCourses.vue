<template>
  <div>
    <div>
      <img
        v-if="category.image"
        width="100%"
        alt="дистанционные курсы"
        :src="category.image"
        height="auto"
        title="дистанционные курсы"
      />
      <h2 class="my-4 page-sub-title">{{ title }}</h2>

      <b-row>
        <b-col v-for="item in category.courses" :key="item.title" md="4">
          <price-card :item="item" />
        </b-col>
      </b-row>
      <hr />
    </div>
  </div>
</template>
<script>
import { getCourseListCategory } from '../http/requests/courses'
import PriceCard from '../components/card_blocks/PriceCard'
export default {
  components: { PriceCard },
  layout: 'leftsided',
  data() {
    return {
      title: '',
      category: {},
    }
  },
  created() {
    this.$store.commit('pageTitle', this.title)
    this.loadCategoryCourses()
  },
  methods: {
    loadCategoryCourses() {
      getCourseListCategory(this.$route.params.id).then((response) => {
        this.category = response.data.payload.category
      })
    },
  },
}
</script>
<style lang="scss" scoped>
.page-sub-title {
  font-size: 20px;
}
</style>
