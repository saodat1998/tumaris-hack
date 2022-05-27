<template>
  <div>
    <h1 class="mb-5 page-title">
      {{ item.title }}
    </h1>
    <b-row>
      <b-col md="3">
        <side-bar-detail :title="$t('menu.services')" :items="sidebarItems" />
      </b-col>
      <b-col md="9">
        <p>
          {{ item.desc }}
        </p>
        <p v-if="item.img" style="text-align: center">
          <img
            :alt="item.title"
            :src="item.img"
            class="img-responsive"
            width="100%"
          />
        </p>
        <div v-html="item.content"></div>
        <feedback />
      </b-col>
    </b-row>
  </div>
</template>
<script>
import { getPageDetail } from '../http/requests/page'
import SideBarDetail from '../components/navigation/SideBarDetail'
import Feedback from '../components/feedback'

export default {
  components: { Feedback, SideBarDetail },
  layout: 'detail',
  data() {
    return {
      sidebarItems: [
        {
          title: 'Сертификация PME',
          url: '/service/24',
          i18n: 'menu.consulting',
        },
        {
          title: 'PM тест он-лайн',
          url: '/service/25',
          i18n: 'menu.outsourcing',
        },
      ],
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
    getPageDetail(this.id).then((response) => {
      this.item = Object.assign(this.item, response.data.payload.newspaper)
    })
  },
}
</script>
