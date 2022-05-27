<template>
  <section class="media-block">
    <card-template
      v-if="Object.assign([], getCoursesItems).length"
      :title="$t('menu.education')"
      :action="{
        title: $t('course.all_courses'),
        link: '/courses',
      }"
    >
      <b-col
        v-for="(item, index) in getCoursesItems"
        :key="index"
        lg="3"
        sm="6"
        cols="12"
        class="mb-3"
      >
        <nuxt-link :to="'/courses/' + item.id">
          <card :item="item" />
        </nuxt-link>
      </b-col>
    </card-template>
  </section>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import Card from '../card_blocks/Card'
export default {
  components: { Card },
  computed: {
    ...mapGetters('courses', ['getCoursesItems']),
  },
  async mounted() {
    await this.loadCoursesList()
  },
  methods: {
    ...mapActions('courses', ['loadCoursesList']),
  },
}
</script>
