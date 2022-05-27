<template>
  <div>
    <h2 class="mb-3 page-sub-title">
      Тренеры учебных программ по управлению проектами PM EXPERT
    </h2>
    <p>
      Тренеры PM Expert это сертифицированные специалисты и опытные
      консультанты, обладающие степенями PMP (PMI), PMP (IPMA), MBA и
      использующие в обучении слушателей собственный уникальный опыт, что делает
      проводимые PM Expert тренинги по управлению проектами особенно практичными
      и эффективными.
    </p>
    <b-row>
      <b-col v-for="item in getManagementItems" :key="item.id" md="4" sm="6">
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
      title: 'Тренеры компании PM Expert',
      members,
    }
  },
  computed: {
    ...mapGetters('team', ['getManagementItems']),
  },
  methods: {
    ...mapActions('team', ['loadManagementList']),
  },
  async created() {
    await this.loadManagementList()
  },
}
</script>
