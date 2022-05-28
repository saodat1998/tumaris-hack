<template>
  <div>
    <Navbar />
    <b-row>
      <b-col>
        <SideBar />
      </b-col>
      <b-col cols="10" style="padding: 20px">
        <Nuxt />
      </b-col>
    </b-row>
  </div>
</template>
<script>
import SideBar from '~/components/profile/SideBar'
import Navbar from '~/components/profile/Navbar'
export default {
  components: { SideBar, Navbar },
}
</script>
