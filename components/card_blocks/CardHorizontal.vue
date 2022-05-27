<template>
  <b-card no-body class="card-horizontal">
    <img
      :src="item.img"
      alt="Image"
      height="200"
      width="330"
      class="rounded-0 card-horizontal--image"
    />
    <b-card-body :title="item[title]">
      <b-card-text>
        {{ item.mini_desc }}
      </b-card-text>
      <div>
        <span v-for="element in item.dates" :key="element" class="pr-4">
          <b-icon-calendar-date />
          {{ element }}
        </span>
      </div>
    </b-card-body>
  </b-card>
</template>
<script>
export default {
  name: 'CardHorizontal',
  props: {
    item: {
      type: Object,
      default() {
        return {}
      },
    },
    title: {
      type: String,
      default: 'title',
    },
  },
}
</script>
<style lang="scss" scoped>
.card-horizontal {
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 30px;
  transition: box-shadow 0.3s ease;
  @include sm-down() {
    display: block;
    padding: 0;
  }
  &:hover {
    box-shadow: 0 10px 20px rgba(211, 215, 221, 0.4);
  }
  &--image {
    @include sm-down() {
      width: 100%;
      height: 100%;
    }
    object-fit: cover;
    flex-shrink: 0;
  }
  &--sub {
    background: var(--primary);
    float: right;
    color: var(--white);
    padding: 2px 8px 1px 9px;
    font-size: 0.6667em;
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: 0.5px;
    border-radius: 2px;
  }
}
</style>
