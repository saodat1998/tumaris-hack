<template>
  <div v-if="!loading" class="banner">
    <vue-slick-carousel v-if="getSliderItems.length" v-bind="settings">
      <a
        v-for="item in getSliderItems"
        :key="item.image"
        class="banner--item"
        :href="item.author"
      >
        <img
          loading="lazy"
          class="banner--item__img"
          :src="
            isMobile
              ? getImageUrl(item.mobile_img, 'x450')
              : getImageUrl(item.img, 'x550')
          "
          width="100%"
        />
      </a>
      <template #prevArrow="">
        <button class="banner--arrow">
          <span class="carousel-control-prev-icon"></span>
        </button>
      </template>
      <template #nextArrow="">
        <button class="banner--arrow">
          <span class="carousel-control-next-icon"></span>
        </button>
      </template>
      <template #customPaging="">
        <div class="banner--dot"></div>
      </template>
    </vue-slick-carousel>
  </div>
  <div v-else class="banner--item__img">
    <b-skeleton-img no-aspect></b-skeleton-img>
  </div>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Banner',
  components: { VueSlickCarousel },
  data() {
    return {
      loading: false,
      settings: {
        arrows: true,
        autoplay: true,
        dots: true,
      },
    }
  },
  computed: {
    ...mapGetters('slider', ['getSliderItems']),
    ...mapGetters('window', ['isMobile']),
  },
  created() {
    this.loading = true
    this.loadSliderList()
    setTimeout(() => {
      this.loading = false
    }, 300)
  },
  methods: {
    ...mapActions('slider', ['loadSliderList']),
  },
}
</script>
<style scoped>
.banner >>> .slick-arrow:before {
  content: none;
  display: none;
}

.banner >>> .slick-prev {
  left: 45px;
  z-index: 1;
}

.banner >>> .slick-next {
  right: 45px;
  z-index: 1;
}
.banner >>> .slick-dots {
  bottom: 14px;
}

@media screen and (min-width: 600px) {
  .banner >>> .slick-dots {
    padding-left: 180px;
    text-align: left;
  }
}
.banner >>> .slick-active .banner--dot {
  width: 43px;
  border-radius: 100px;
  background-color: rgb(211 167 133 / 75%);
  opacity: 1;
}

.banner >>> .slick-dots li {
  width: auto;
}
</style>

<style lang="scss" scoped>
.banner {
  &--item {
    position: relative;
    &__img {
      height: 75vh;
      object-fit: cover;
      @include sm-down() {
        height: 250px;
      }
    }
    h3 {
      padding: 20px 60px;
      position: absolute;
      background: rgba(0, 0, 0, 0.29);
      z-index: 1000;
      bottom: 50px;
      width: 100%;
      color: white;
      font-size: 20px;
      @include sm-down() {
        padding: 20px;
      }
    }
  }
  &--arrow {
    background-color: rgb(211 167 133 / 75%);
    height: 70px;
    width: 70px;
    border-radius: 50%;
    transition: background-color 0.3s ease-in-out;

    @include sm-down() {
      display: none;
    }

    &:hover {
      background-color: rgb(211 167 133);
    }
  }

  &--dot {
    height: 15px;
    width: 15px;
    background-color: rgb(211 167 133 / 75%);
    border-radius: 50%;
    opacity: 0.5;
  }
}
</style>
