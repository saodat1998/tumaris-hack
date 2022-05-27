<template>
  <div class="content">
    <div class="page_title_wrap">
      <h1 id="pagetitle" style="font-weight: bold">Опыт</h1>
    </div>
    <section class="partners" style="text-align: center">
      <b-container>
        <img
          height="300"
          :src="require('@/assets/images/partners-pmc/opit.jpg')"
        />
      </b-container>
    </section>
    <experience-partners />
  </div>
</template>
<script>
import { getPageDetail } from '../http/requests/page'
import ExperiencePartners from '../components/sections/ExperiencePartners'

export default {
  components: { ExperiencePartners },
  layout: 'detail',
  data() {
    return {
      sidebarItems: [
        {
          title: 'PM Excellence',
          url: '/pmc/33',
          i18n: 'menu.pmc_excellence',
        },
        {
          title: 'Что такое PMC',
          url: '/pmc/34',
          i18n: 'menu.what_is_pmc',
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
<style type="scss">
.about2 {
  position: relative;
  padding: 7px 0 71px;
}

.about2:before {
  content: '';
  position: absolute;
  left: 50%;
  width: 1px;
  height: calc(100%);
  margin-left: -1px;
  background: #852a34;
}

.about2--intro {
  color: #565656;
  font-size: 15px;
  line-height: 30px;
  padding-right: 50px;
  margin: 0 50% -19px 0;
}

.about2 h3 {
  position: relative;
  z-index: 1;
  font-size: 30px;
  line-height: 40px;
  font-weight: 900;
  padding: 0;
  margin: 52px 0 25px;
}

.about2 h3:before {
  content: '';
  position: absolute;
  top: 1px;
  width: 38px;
  height: 38px;
  margin: 0 -18px 0 -20px;
  background: #852a34;
  -webkit-border-radius: 50px;
  border-radius: 50px;
}

.about2 h5 {
  position: relative;
  z-index: 1;
  font-size: 18px;
  line-height: 30px;
  padding: 0;
  margin: 25px 0 22px;
}

.about2 h5:before {
  content: '';
  position: absolute;
  top: 3px;
  width: 19px;
  height: 19px;
  margin: 0 -9px 0 -10px;
  background: #852a34;
  -webkit-border-radius: 50px;
  border-radius: 50px;
}

.about2 ul {
  position: relative;
  z-index: 1;
  margin: 22px 0 31px;
}

.about2 li {
  position: relative;
  color: #565656;
  font-size: 15px;
  line-height: 24px;
  margin: 0 0 12px;
}

.about2 li:before {
  content: '';
  position: absolute;
  top: 5px;
  width: 12px;
  height: 12px;
  border: 2px solid #852a34;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}

.about2__lc {
  position: relative;
  text-align: right;
  padding-right: 50px;
  margin: 0 50% 0 0;
}

.about2__rc {
  position: relative;
  padding-left: 50px;
  margin: 0 0 0 50%;
}

.about2__lc h3:before,
.about2__lc h5:before {
  right: -50px;
}

.about2__lc li {
  padding-right: 26px;
}

.about2__lc li:before {
  right: 0;
}

.about2__rc h3:before,
.about2__rc h5:before {
  left: -50px;
}

.about2__rc li {
  padding-left: 26px;
}

.about2__rc li:before {
  left: 0;
}

.about2 .icon {
  position: absolute;
  width: 571px;
  width: calc(100% + 1px);
  height: auto;
}

.about2 .icon_1 {
  left: -100%;
  top: 50px;
  margin-left: -1px;
}

.about2 .icon_2 {
  left: 100%;
  top: 81px;
  margin-left: -1px;
}

.about2 .icon_3 {
  left: -100%;
  top: 36px;
  margin-left: -1px;
}

.about2 .icon_4 {
  left: 100%;
  top: 81px;
  margin-left: -1px;
}
li {
  list-style: none;
}
/*.wrapper {
  background-image: url('https://pmexcellence.com/local/static/img/bg-inner-2-1.jpg');
}*/
</style>
