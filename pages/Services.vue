<template>
  <card-template>
    <b-col v-for="item in getServicesItems" :key="item.url" md="12">
      <nuxt-link :to="localePath('/services/' + item.id)">
        <card-horizontal :item="item" />
      </nuxt-link>
    </b-col>
  </card-template>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import CardHorizontal from '../components/card_blocks/CardHorizontal'
import CardTemplate from '../components/card_blocks/CardTemplate'
export default {
  name: 'ServicesPage',
  components: { CardTemplate, CardHorizontal },
  layout: 'leftsided',
  data() {
    return {
      title: 'Услуги по управлению проектами.',
    }
  },
  computed: {
    ...mapGetters('services', ['getServicesItems']),
  },
  created() {
    this.$store.commit('pageTitle', this.title)
    this.loadServicesList()
  },
  methods: {
    ...mapActions('services', ['loadServicesList']),
  },
}
</script>
<style lang="scss" scoped>
.programs {
  background: $background;
}
</style>
