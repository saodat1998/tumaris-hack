<template>
  <div>
    <header class="header">
      <top-bar />
      <b-container>
        <b-row class="align-center justify-center">
          <b-col lg="2" sm="3" cols="6" class="">
            <nuxt-link :to="{ name: 'home' }">
              <logo id="logo" />
            </nuxt-link>
          </b-col>
          <b-col lg="7" sm="0" cols="0" class="links">
            <nav-links />
          </b-col>
          <b-col lg="3" sm="9" cols="6">
            <div class="d-flex justify-content-end">
              <a
                class="btn-solid scroll-to-request btn small consultation-btn"
                href="tel:+998712000833"
              >
                Sign in
              </a>
              <mobile-menu />
            </div>
          </b-col>
        </b-row>
      </b-container>
    </header>
    <div class="spacer" />
  </div>
</template>
<script>
import Logo from '../Logo'
import MobileMenu from './MobileMenu'
import TopBar from './TopBar'
import NavLinks from './NavLinks'
export default {
  name: 'NavBar',
  components: {
    NavLinks,
    TopBar,
    MobileMenu,
    Logo,
  },
  data() {
    return {
      img: '/img/logo.png',
    }
  },
  mounted() {
    let scrollpos = window.scrollY
    const header = document.querySelector('header')
    const addClassOnScroll = () => header.classList.add('darkHeader')
    const removeClassOnScroll = () => header.classList.remove('darkHeader')
    window.addEventListener('scroll', function () {
      scrollpos = window.scrollY
      if (scrollpos >= 10) {
        addClassOnScroll()
      } else {
        removeClassOnScroll()
      }
    })
  },
}
</script>
<style lang="scss" scoped>
.header {
  position: absolute;
  top: 0;
  z-index: 100000;
  width: 100%;
  transition: background-color 0.3s ease-in-out;
  @include md-down() {
    display: flex;
    align-items: center;
    height: 50px;
  }
}
.darkHeader {
  position: fixed;
  background-color: #fff;
  border-bottom: 1px solid;
  z-index: 9999999;
  box-shadow: 0px 4px 6px 0px #0000005c;
  .topbar {
    display: none;
  }
}
.links {
  @include md-down() {
    display: none;
  }
}
.spacer {
  height: 111px;
  @include md-down() {
    height: 90px;
  }
  @include sm-down() {
    height: 50px;
  }
}
.icons {
  text-align: right;
}
.search-input {
  @include lg-down() {
    display: none;
  }
  height: 23px;
  border-radius: 18px;
  margin-right: 4px;
  border: solid #666666 0.5px;
  width: 92%;
}
.consultation-btn {
  display: inline;
  line-height: 16px;
  color: #fff;
  background-color: #d3a785;
  font-weight: 600;
  font-size: 13px;
  border-radius: 16px;
  padding: 3px 7px 5px 7px;
}
@media (max-width: 774px) {
  .consultation-btn {
    line-height: 8px;
    color: #fff;
    background-color: #d3a785;
    font-weight: 600;
    font-size: 10px;
    border-radius: 14px;
    padding: 2px;
    max-width: 120px;
  }
}
</style>
