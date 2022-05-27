<template>
  <b-row>
    <b-col md="3">
      <side-bar-detail title="О компании" :items="sidebarItems" />
    </b-col>
    <b-col md="9">
      <h1 class="mb-5 page-title">
        {{ item.title }}
      </h1>
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
    </b-col>
  </b-row>
</template>
<script>
import { getPageDetail } from '../http/requests/page'

export default {
  layout: 'detail',
  data() {
    return {
      sidebarItems: [
        {
          title: 'Миссия',
          url: '/page/16',
          i18n: 'menu.mission',
        },
        {
          title: 'Опыт',
          url: '/experience',
          i18n: 'menu.experience',
        },
        {
          title: 'История',
          url: '/page/18',
          i18n: 'menu.history',
        },
        {
          title: 'Только факты',
          url: '/page/19',
          i18n: 'menu.facts',
        },
        {
          title: 'Проведённые курсы',
          url: '/last-courses',
          i18n: 'menu.finished_courses',
        },
        {
          title: 'Тренеры',
          url: '/members',
          i18n: 'menu.trainers',
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
