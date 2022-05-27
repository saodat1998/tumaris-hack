<template>
  <b-row>
    <b-col md="3">
      <side-bar-blog />
    </b-col>
    <b-col md="9">
      <h1 class="mb-5 page-title">
        {{ item.title }}
      </h1>
      <div>Published: {{ item.published_at }}</div>
      <div style="font-style: italic">
        {{ item.mini_desc }}
      </div>
      <p style="text-align: center">
        <img
          :alt="item.title"
          :src="item.img"
          class="img-responsive"
          width="100%"
        />
      </p>
      <div v-html="item.content"></div>
    </b-col>
  </b-row>
</template>
<script>
import { getDetail } from '../http/requests/articles'
import SideBarBlog from '../components/navigation/SideBarBlog'

export default {
  components: { SideBarBlog },
  layout: 'detail',
  data() {
    return {
      id: '',
      item: {
        title: '',
        img: '',
        mini_desc: '',
        content: '',
      },
    }
  },
  created() {
    this.id = this.$route.params.id
    getDetail(this.id).then((response) => {
      this.item = Object.assign(this.item, response.data.payload.articles)
    })
  },
}
</script>
