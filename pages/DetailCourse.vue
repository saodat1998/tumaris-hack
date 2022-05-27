<template>
  <div>
    <p v-if="item.img" style="text-align: center">
      <img alt="company" :src="item.img" class="img-responsive" width="100%" />
    </p>
    <div v-if="item.content" class="course-content" v-html="item.content"></div>
    <feedback v-if="Object.entries(item).length" />
  </div>
</template>
<script>
import PagesMixin from '@/plugins/PagesMixin'
import { getCourseDetail } from '../http/requests/courses'
import Feedback from '../components/feedback'
export default {
  components: { Feedback },
  mixins: [PagesMixin],
  data() {
    return {
      item: {},
    }
  },
  async mounted() {
    this.courceId = this.$route.params.id
    if (this.courceId) {
      await this.loadData(this.courceId)
    }
  },
  methods: {
    loadData(id) {
      getCourseDetail(id).then((response) => {
        this.item = response.data.payload.newspaper
        this.$store.commit('pageTitle', this.item.title)
      })
    },
  },
}
</script>

<style lang="css">
.course-content >>> iframe {
  width: 100% !important;
}
</style>
