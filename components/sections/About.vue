<template>
  <section class="about page-background">
    <b-container>
      <b-row>
        <b-col class="section-title about--title" md="12">
          <h3 class="option-bold-700">{{ $t('about.title') }}</h3>
          <div class="right_soc_icons">
            <socials />
          </div>
        </b-col>
        <b-col class="about--content" md="6">
          <h4 class="option-bold"></h4>
          <h1>
            <span class="about--span">{{ $t('about.description') }}</span>
          </h1>
          <p>{{ $t('about.company_mission') }}<br /></p>

          <div class="company">
            <p style="text-align: justify">
              <span class="about--span">{{ $t('about.company') }} </span
              ><span class="about--span"> {{ $t('about.content') }}</span>
            </p>
            <br />
          </div>

          <div class="company_buttons">
            <a href="/page/1" class="btn btn-primary mr-3">
              {{ $t('about.detail') }}
            </a>
            <a href="/members" class="btn btn-light">
              {{ $t('menu.trainers') }}
            </a>
          </div>
        </b-col>
        <b-col md="6" class="about--banner">
          <about-banner />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script>
import { getDetail as getDetailAbout } from '../../http/requests/services'
export default {
  name: 'About',
  data() {
    return {
      item: {},
    }
  },
  mounted() {
    getDetailAbout(1).then((response) => {
      this.item = response.data.payload.newspaper
    })
  },
}
</script>
<style lang="scss" scoped>
.about {
  &--title {
    @include sm-down() {
      margin-bottom: 0px;
    }
    h3 {
      line-height: 39px;
      font-size: 30px;
    }
  }
  &--span {
    font-size: 12pt;
  }
  &--content {
    @include md-down() {
      margin-bottom: 30px;
    }
  }
  &--banner {
    display: block;
    @include sm-down() {
      display: none;
    }
  }
}
</style>
