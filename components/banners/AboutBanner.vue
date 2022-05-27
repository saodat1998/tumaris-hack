<template>
  <div>
    <b-carousel
      v-if="Object.assign([], getManagementItems).length"
      id="carousel-1"
      class="about-banner"
      :interval="4000"
    >
      <b-carousel-slide
        v-for="(member, index) in getManagementItems"
        :key="index"
      >
        <template #img>
          <nuxt-link :to="'/members/' + member.id">
            <div
              class="about-banner--item"
              :style="{
                'background-image': `url(${member.img})`,
              }"
            >
              <h4>
                {{ member.mini_desc }}
              </h4>
            </div>
          </nuxt-link>
        </template>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {}
  },
  computed: {
    ...mapGetters('team', ['getManagementItems']),
  },
  created() {
    this.loadManagementList()
  },
  methods: {
    ...mapActions('team', ['loadManagementList']),
  },
}
</script>
<style lang="scss" scoped>
.about-banner {
  &--item {
    min-height: 400px;
    background-size: cover;
    background-position: center;
    border-radius: 10px;
    h4 {
      position: absolute;
      left: 0;
      bottom: 0;
      background: white;
      font-weight: normal;
      font-size: 13px;
      line-height: 20px;
      color: #828282;
      max-width: 50%;
      padding: 20px 20px 20px 23px;
      border-radius: 0 0 0 9px;
      margin: 0;
    }
  }
}
</style>
