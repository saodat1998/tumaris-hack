<template>
  <div>
    <nav-bar />
    <b-breadcrumb>
      <b-breadcrumb-item
        v-for="item in $route.meta.breadcrumb"
        :key="item.text"
        :to="{ name: item.name }"
        :active="!item.name"
      >
        {{ item.text }}
      </b-breadcrumb-item>
    </b-breadcrumb>
    <b-container>
      <Nuxt />
    </b-container>
    <pages-footer />
  </div>
</template>
<style lang="scss" scoped>
@include sm-down() {
  .page-title {
    font-size: 20%;
  }
}
.breadcrumb {
  padding-left: 200px;
}
</style>
<script>
import PagesFooter from '../components/footer/PagesFooter'
import NavBar from '../components/navigation/NavBar'
export default {
  components: { NavBar, PagesFooter },
}
</script>
