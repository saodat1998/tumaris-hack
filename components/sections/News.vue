<template>
  <section class="online-courses page-background">
    <b-container>
      <b-col class="section-title" md="12">
        <h3 class="online-courses-section-title">{{ $t('news.title') }}</h3>
        <nuxt-link to="articles">Все публикации</nuxt-link>
      </b-col>
    </b-container>
    <div
      v-if="Object.assign([], getArticlesItems).length"
      class="online-courses--slider"
    >
      <VueSlickCarousel v-bind="settings">
        <div
          v-for="(item, index) in getArticlesItems"
          :key="index"
          class="online-courses--item"
        >
          <div
            class="online-courses--image"
            :style="{ 'background-image': 'url(' + item.img + ')' }"
          >
            <div class="online-courses--overlay" />
            <a class="online-courses--link" :href="'/article/' + item.id">
              <div class="online-courses--link__truncate">{{ item.title }}</div>
            </a>
          </div>
        </div>
      </VueSlickCarousel>
    </div>
  </section>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  name: 'News',
  components: { VueSlickCarousel },
  data() {
    return {
      settings: {
        focusOnSelect: true,
        infinite: true,
        slidesToShow: 4,
        speed: 500,
        responsive: [
          {
            breakpoint: 1600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
      items: [
        {
          image:
            'https://pm.expert/upload/resize_cache/iblock/ee8/700_700_0/ee81c0faeedfb877730f53e1fb585b37.jpg',
          title: 'Управление проектами в компании (20 PDU)',
          url: '#',
        },
        {
          image:
            'https://pm.expert/upload/resize_cache/iblock/837/700_700_0/8379ce7cc6042983889577884e60480f.jpg',
          title: 'Управление проектами в компании (20 PDU)',
          url: '#',
        },
        {
          image:
            'https://pm.expert/upload/resize_cache/iblock/ee8/700_700_0/ee81c0faeedfb877730f53e1fb585b37.jpg',
          title: 'Управление проектами в компании (20 PDU)',
          url: '#',
        },
        {
          image:
            'https://pm.expert/upload/resize_cache/iblock/837/700_700_0/8379ce7cc6042983889577884e60480f.jpg',
          title: 'Управление проектами в компании (20 PDU)',
          url: '#',
        },
      ],
    }
  },
  computed: {
    ...mapGetters('articles', ['getArticlesItems']),
  },
  created() {
    this.loadArticlesList()
  },
  methods: {
    ...mapActions('articles', ['loadArticlesList']),
  },
}
</script>
<style lang="scss" scoped>
.online-courses {
  &--slider {
    @include xl-down() {
      padding: 0 25px;
    }
  }
  &-section-title {
    margin-bottom: 0;
    @include sm-down() {
      font-size: 20px;
    }
  }
  &--item {
    padding: 0 20px;
    border-radius: 10px;

    @include sm-down() {
      padding: 0;
    }
  }
  &--image {
    border-radius: 10px;
    position: relative;
    height: 275px;
    transition: box-shadow 0.3s ease;
    &:hover {
      box-shadow: -1px 8px 13px 1px rgb(0 0 0 / 17%);
    }
    background-size: cover !important;
    margin-bottom: 10px;
  }
  &--overlay {
    border-radius: 10px;
    opacity: 0.3;
    -webkit-transition: opacity 0.2s ease;
    -o-transition: opacity 0.2s ease;
    -moz-transition: opacity 0.2s ease;
    transition: opacity 0.2s ease;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 1;
    display: block;
    top: 0;
    &:hover {
      opacity: 0.7;
    }
  }
  &--link {
    padding: 17px 40px;
    max-width: 365px;
    position: absolute;
    bottom: 0px;
    color: var(--white);
    font-size: 1.2em;
    line-height: 1.25em;
    font-weight: bold;
    z-index: 3;
    background: rgb(0 0 0 / 14%);

    &__truncate {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>
<style scoped>
.online-courses >>> .slick-list:after {
  background-image: linear-gradient(
    90deg,
    hsla(180, 5%, 96%, 0.001),
    hsla(180, 5%, 96%, 0.2) 5%,
    hsla(180, 5%, 96%, 0.6) 30%,
    hsla(180, 5%, 96%, 0.8)
  );
  left: 70%;
  position: absolute;
  height: 100%;
  width: 50%;
  top: 0px;
  content: '';
  z-index: 2;
  pointer-events: none;
}

.online-courses >>> .slick-list:before {
  position: absolute;
  height: 100%;
  width: 50%;
  content: '';
  z-index: 2;
  top: 0px;
  pointer-events: none;
  right: 70%;
  background-image: linear-gradient(
    -90deg,
    hsla(180, 5%, 96%, 0.001),
    hsla(180, 5%, 96%, 0.2) 5%,
    hsla(180, 5%, 96%, 0.6) 30%,
    hsla(180, 5%, 96%, 0.8)
  );
}

@media only screen and (max-width: 1500px) {
  .online-courses >>> .slick-list:before {
    right: 95%;
  }
  .online-courses >>> .slick-list:after {
    left: 95%;
  }
}
</style>
