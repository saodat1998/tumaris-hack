<template>
  <section class="media-block">
    <card-template2
      v-if="Object.assign([], getCoursesItems).length"
      title="Your current courses"
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
          <card :item="item" :progress="true" />
        </nuxt-link>
      </b-col>
    </card-template2>
  </section>
</template>
<script>
import Card from '@/components/card_blocks/Card'
export default {
  components: { Card },
  layout: 'profile',
  data() {
    return {
      getCoursesItems: [
        {
          id: 7,
          title: 'The Best Knitted Toy Patterns for Beginners',
          status: 1,
          author: null,
          type: 'PROJECT',
          mini_desc:
            "Are you looking for toy patterns now because you're only just learning about shaped knitting and you'd like to get a nice head start for Christmas? ",
          img: '/img/courses/4.jpg',
          mobile_img: null,
          file: null,
          publishedAt: '2022-10-11',
          createdAt: '2022-05-24',
          date: '2022-08-02',
        },
      ],
    }
  },
}
</script>
