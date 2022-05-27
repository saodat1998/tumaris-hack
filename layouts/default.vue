<template>
  <div>
    <nav-bar />
    <Nuxt />
    <pages-footer />
    <animated-block />
    <to-top />
  </div>
</template>
<script>
import NavBar from '../components/navigation/NavBar'
import PagesFooter from '../components/footer/PagesFooter'
import ToTop from '../components/ToTop'
import AnimatedBlock from '../components/AnimatedBlock'
export default {
  components: { AnimatedBlock, ToTop, PagesFooter, NavBar },
}
</script>
