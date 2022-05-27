<template>
  <section class="media-block">
    <card-template
      :title="$t('services.title')"
      :action="{ title: $t('services.all_services'), link: '/services' }"
    >
      <b-col v-for="(item, index) in getServicesItems" :key="index" md="6">
        <card-horizontal-second :item="item" />
      </b-col>
    </card-template>
  </section>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Services',
  computed: {
    ...mapGetters('services', ['getServicesItems']),
  },
  created() {
    this.loadServicesList()
  },
  methods: {
    ...mapActions('services', ['loadServicesList']),
  },
}
</script>
