<template>
  <div class="left_block">
    <aside class="sidebar left_menu_1">
      <h3>Курсы</h3>
      <ul class="nav nav-list side-menu">
        <li v-for="(cource, index) in getCoursesItems" :key="index" class="">
          <a class="" target="" :href="'/courses/' + cource.id">{{
            cource.title
          }}</a>
        </li>
      </ul>
    </aside>
    <div class="sidearea">
      <div class="include"></div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'SideBar',
  data() {
    return {
      events: [
        {
          image:
            'https://pm.expert/upload/iblock/9c5/9c53d0b4d33f60dc419737176b8da543.jpg',
          title:
            'Онлайн курс практические инструменты сокращения стоимости проекта2',
          url: '#',
        },
        {
          image:
            'https://pm.expert/upload/iblock/9c5/9c53d0b4d33f60dc419737176b8da543.jpg',
          title:
            'Онлайн курс практические инструменты сокращения стоимости проекта3',
          url: '#',
        },
        {
          image:
            'https://pm.expert/upload/iblock/9c5/9c53d0b4d33f60dc419737176b8da543.jpg',
          title:
            'Онлайн курс практические инструменты сокращения стоимости проекта4',
          url: '#',
        },
      ],
    }
  },
  computed: {
    ...mapGetters('articles', ['getArticlesItems']),
    ...mapGetters('courses', ['getCoursesItems']),
  },
  created() {
    this.loadCoursesList()
    this.loadArticlesList()
  },
  methods: {
    ...mapActions('articles', ['loadArticlesList']),
    ...mapActions('courses', ['loadCoursesList']),
  },
}
</script>
<style lang="scss" scoped>
.side-menu li {
  line-height: 16px;
  padding: 0px;
  margin-bottom: 0px;
}
.left_menu_1 .side-menu > li {
  border-top: 1px solid #ebebef;
  border-bottom: 1px solid #ebebef;
  margin-top: -1px;
}

.left_menu_1 .side-menu > li > a {
  font-size: 0.9335em;
  line-height: 18px;
  padding: 26px 20px 25px 20px;
}
.side-menu > li > a {
  font-size: 0.933em;
  line-height: 20px;
  position: relative;
  text-decoration: none;
  padding: 14px 47px 14px 19px;
  font-weight: normal;
}
.nav > li,
.nav > li > a {
  display: block;
  position: relative;
  width: 100%;
}
</style>
