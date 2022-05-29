<template>
  <div style="padding-left: 20px">
    <h4>Your frozen balance</h4>
    <wallet />
    <b-card>
      <h4>Income chart (in dollars $)</h4>
      <LineChart />
    </b-card>
    <div></div>
  </div>
</template>

<script>
import LineChart from '~/components/charts/Line'
import Wallet from '~/components/profile/Wallet'
export default {
  components: {
    LineChart,
    Wallet,
  },
  layout: 'profile',
}
</script>
