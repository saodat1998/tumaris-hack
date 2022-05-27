<template>
  <div>
    <h2 class="mb-3 page-sub-title">Команда PM Excellence</h2>
    <p>
      Каждый партнер имеет большой опыт в управлении программами и проектами.
    </p>
    <b-row>
      <b-col v-for="item in getTeamItems" :key="item.id" md="4" sm="6">
        <card-second :item="item" />
      </b-col>
    </b-row>
  </div>
</template>
<script>
import PagesMixin from '@/plugins/PagesMixin'
import members from '@/assets/data/members'
import { mapGetters, mapActions } from 'vuex'
import CardSecond from '../components/card_blocks/CardSecond'
export default {
  components: { CardSecond },
  mixins: [PagesMixin],
  data() {
    return {
      title: 'Команда',
      members,
    }
  },
  computed: {
    ...mapGetters('team', ['getTeamItems']),
  },
  methods: {
    ...mapActions('team', ['loadTeamList']),
  },
  async created() {
    await this.loadTeamList('TEAM')
  },
}
</script>
