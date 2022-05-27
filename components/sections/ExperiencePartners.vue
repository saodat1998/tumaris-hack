<template>
  <section class="partners">
    <b-container v-if="Object.assign([], items).length">
      <h3 class="partners-section-title">Наш опыт</h3>
      <VueSlickCarousel v-bind="settings">
        <a
          v-for="(item, index) in items"
          :key="index"
          href="javascript:void(0)"
          style="font-size: small; margin-right: 5px"
          class="partners--item my-3"
        >
          <img height="100" :src="item.image" />
          <span style="font-size: small; padding: 2px">{{ item.text }}</span>
        </a>
        <template #prevArrow>
          <div class="partners--control">
            <b-icon-chevron-left />
          </div>
        </template>
        <template #nextArrow>
          <div class="partners--control">
            <b-icon-chevron-right />
          </div>
        </template>
      </VueSlickCarousel>
    </b-container>
  </section>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  name: 'ExperiencePartners',
  components: { VueSlickCarousel },
  data() {
    return {
      settings: {
        focusOnSelect: true,
        infinite: true,
        slidesToShow: 6,
        speed: 500,
        dots: true,
        centerMode: true,
        centerPadding: '20px',
        responsive: [
          {
            breakpoint: 1600,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 6,
            },
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 4,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
        ],
      },
      items: [
        {
          image: require('@/assets/images/partners-pmc/sochi.jpg'),
          url: '#',
          text: 'Строительство Ледовой арены для керлинга (Сочи-2014)',
        },
        {
          image: require('@/assets/images/partners-pmc/c0d20382d2e731a8a0f56d859b3c30de.png'),
          url: '#',
          text:
            'Программа создания АИИС КУЭ ЕНЭС, Единые энергетические системы России',
        },
        {
          image: require('@/assets/images/partners-pmc/bcf226c336feadbdf775eaf3af1a782b.png'),
          url: '#',
          text:
            'Реконструкция газоочистки ШП №1 и техническое перевооружение непрерывного 4х клетьевого стана 1700, Череповецкий металлургический комбинат',
        },
        {
          image: require('@/assets/images/partners-pmc/45e48730cde109ac61e8f35802a0a839.png'),
          url: '#',
          text:
            'Реконструкция нефтяного терминала «Шесхарис», Новороссийский морской торговый порт',
        },
        {
          image: require('@/assets/images/partners-pmc/2d141d86ce466ddfa7c328a17b1e5427.png'),
          url: '#',
          text: 'Программа газовых проектов «Роспан», Ямало-Ненецкий АО',
        },
        {
          image: require('@/assets/images/partners-pmc/5e9c91b8771ec995b23a5435324e23f1.jpeg'),
          url: '#',
          text:
            'Разработка центрального нефтяного блока и кургунского лицензионного участка Среднеботуобинского НГКМ',
        },
        {
          image: require('@/assets/images/partners-pmc/repsol.png'),
          url: '#',
          text: 'Обустройство газового месторождения в Западной Сибири',
        },
        {
          image: require('@/assets/images/partners-pmc/tayotta.jpg'),
          url: '#',
          text:
            'Портфель из 6 проектов. Портальные решения, бюджетирование, ERP.',
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
.partners {
  @include sm-down() {
    padding: 0 15px;
    &-section-title {
      margin-top: 20px;
    }
  }
  img {
    border-radius: 10px;
    object-fit: contain;
    width: 100%;
  }
  &--control {
    background-color: $background;
    width: 30px;
    height: 30px;
    padding: 7px;
    svg {
      font-size: 15px;
      font-weight: bold;
      color: #6b6b6b;
    }
  }
}
</style>
<style scoped>
.partners >>> .slick-prev:before,
.partners >>> .slick-next:before {
  content: '';
  font-size: 0;
}
</style>
