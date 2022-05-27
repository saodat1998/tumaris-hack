<template>
  <a
    :href="'/courses/' + item.id"
    class="price-card"
    style="text-align: center"
  >
    <img :src="item.img" alt="Image" class="price-card--image" />
    <h3 class="price-card--title">
      {{ item.title }}
    </h3>
    <span>{{ item.mini_desc }}</span>
  </a>
</template>
<script>
export default {
  name: 'PriceCard',
  props: {
    item: {
      type: Object,
    },
  },
}
</script>
<style lang="scss" scoped>
.price-card {
  display: block;
  border-radius: 10px;
  margin-bottom: 30px;
  transition: box-shadow 0.3s ease;
  padding: 10px;

  &--image {
    height: 200px;
    width: 100%;
    object-fit: cover;
  }
  &--title {
    margin-top: 10px;
    font-size: 16px;
    text-align: center;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    transition: all 0.3 ease-in-out;
  }
  &:hover {
    box-shadow: 0px 8px 17px 2px rgb(51 51 51 / 23%);
    h3 {
      overflow: initial;
      white-space: normal;
    }
  }
}
</style>
