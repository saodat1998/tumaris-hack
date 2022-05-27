<template>
  <card-template>
    <b-col v-for="(item, index) in categories" :key="index" md="12">
      <nuxt-link :to="'/courses-category/' + item.id">
        <card-horizontal :item="item" title="name" />
      </nuxt-link>
    </b-col>
  </card-template>
</template>
<script>
import { mapActions } from 'vuex'
import { getListCategory } from '../http/requests/courses'
export default {
  layout: 'leftsided',
  data() {
    return {
      title: 'Обучение управлению проектами, курсы по управлению проектами.',
      categories: [],
    }
  },
  created() {
    this.$store.commit('pageTitle', this.title)
    getListCategory().then((response) => {
      this.categories = response.data.payload.categories
    })
  },
  methods: {
    ...mapActions('courses', ['loadCoursesList']),
  },
}
</script>
<style lang="scss" scoped>
.programs {
  background: $background;
}
</style>
