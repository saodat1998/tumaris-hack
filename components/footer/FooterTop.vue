<template>
  <section class="footer-top">
    <b-container>
      <b-row>
        <b-col md="3">
          <h5 class="footer-top--title">{{ $t('footer.know_first') }}</h5>
          <p class="footer-top--description">
            {{ $t('footer.subscribe_text') }}
          </p>
          <hr />
          <socials class="my-3" />
          <label>Введите эл. почта</label>
          <input
            v-model="email"
            class="form-control"
            style="margin-bottom: 4px"
            placeholder="example@mail.com"
            type="text"
          />
          <a
            href="javascript:void(0)"
            class="btn btn-primary mt-2 footer-top--btn"
            @click="sendMail"
          >
            {{ $t('footer.subscribe_news') }}
          </a>
          <p v-if="message">
            <span style="color: #3c763d">{{ message }}</span>
          </p>
        </b-col>
        <b-col md="9">
          <b-row>
            <b-col md="6">
              <h5 class="footer-top--title">Курсы</h5>
              <simple-card
                v-for="(item, index) in getCoursesItems"
                :key="index"
                :url="`/courses/${item.id}`"
                :item="item"
              ></simple-card>
            </b-col>
            <b-col md="6">
              <h5 class="footer-top--title">
                <nuxt-link to="/articles">Новости</nuxt-link>
              </h5>
              <simple-card
                v-for="(item, index) in getArticlesItems"
                :key="index"
                :url="`/article/${item.id}`"
                :item="item"
              ></simple-card>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'FooterTop',
  data() {
    return {
      email: '',
      message: '',
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
    sendMail() {
      alert('Thanks for filling!')
    },
  },
}
</script>
<style lang="scss" scoped>
.footer-top {
  margin-top: 60px;
  padding-top: 30px;
  background: $background;
  &--title {
    font-size: 1em;
    margin-bottom: 30px;
    @include md-down() {
      margin-top: 30px;
    }
  }
  &--description {
    font-size: 13px;
  }
  &--btn {
    width: 100%;
    &:hover {
      background-color: var(--green);
      border-color: var(--green);
    }
  }
}
</style>
