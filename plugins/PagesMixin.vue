<script>
export default {
  layout: 'leftsided',
  mounted() {
    this.$store.dispatch('pageTitle', this.title)
  },
}
</script>
