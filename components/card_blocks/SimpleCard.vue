<template>
  <nuxt-link :to="url" class="simple-card">
    <img :src="item.img" alt="Image" class="simple-card--image" />
    <div class="simple-card--title">
      {{ item.title }}
    </div>
  </nuxt-link>
</template>
<script>
export default {
  name: 'SimpleCard',
  props: {
    item: {
      type: Object,
      default() {
        return {
          url: '',
          title: '',
          img: '',
        }
      },
    },
    url: {
      type: String,
      default: '/',
    },
  },
}
</script>
<style lang="scss" scoped>
.simple-card {
  padding: 5px;
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
  transition: box-shadow 0.3s ease;
  &:hover {
    box-shadow: 0 10px 20px rgba(211, 215, 221, 0.4);
  }
  &--image {
    height: 60px;
    width: 60px;
    object-fit: cover;
    border-radius: 10px;
  }
  &--title {
    font-size: 13px;
    padding-left: 10px;
  }
}
</style>
