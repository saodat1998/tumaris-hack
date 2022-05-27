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
    <Nuxt />
    <pages-footer />
  </div>
</template>
<script>
import NavBar from '../components/navigation/NavBar'
import PagesFooter from '../components/footer/PagesFooter'
export default {
  components: { PagesFooter, NavBar },
}
</script>
