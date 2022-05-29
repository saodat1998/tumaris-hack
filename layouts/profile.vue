<template>
  <div class="profile">
    <Navbar class="nav" />
    <SideBar />
    <div class="content">
      <Nuxt style="padding: 20px" />
    </div>
  </div>
</template>
<script>
import SideBar from '~/components/profile/SideBar'
import Navbar from '~/components/profile/Navbar'
export default {
  components: { SideBar, Navbar },
}
</script>

<style lang="scss" scoped>
.profile {
  position: relative;
}
.nav {
  position: fixed;
  width: 100%;
}
.content {
  padding-left: 320px;
  padding-top: 82px;
}
</style>
