<template>
  <b-card
    :title="item.title"
    :img-src="item.img"
    img-alt="Image"
    tag="article"
    class="card"
  >
    <div class="card__content">
      <b-card-text v-if="item.description">
        {{ item.description }}
      </b-card-text>
      <div v-if="item.date" class="card__date">
        {{ item.date }}
      </div>
      <div v-if="progress">
        <b-progress
          height="25px"
          class="w-100 mb-3"
          value="75"
          max="100"
          show-progress
          animated
        >
          <b-progress-bar :value="75">
            <span>Done: <strong>75%</strong></span>
          </b-progress-bar>
        </b-progress>
        <div class="d-flex justify-content-end">
          <nuxt-link :to="'/courses/' + item.id">
            <b-button variant="primary">Continue</b-button>
          </nuxt-link>
        </div>
      </div>
    </div>
  </b-card>
</template>
<script>
export default {
  name: 'Card',
  props: {
    item: {
      required: true,
      type: [Object, Array],
    },
    progress: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
<style lang="scss" scoped>
.card {
  height: 100%;
  transition: box-shadow 0.3s ease;
  margin-bottom: 20px;

  &__date {
    text-align: right;
    font-size: 12px;
    color: #a5a5a5;
  }

  &:hover {
    box-shadow: 0 10px 20px rgba(211, 215, 221, 0.4);
  }

  .card-title {
    font-size: 18px;
    margin-bottom: 0;
  }

  .card-img {
    height: 200px;
    object-fit: cover;
    object-position: top;
  }

  .card-body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
  }

  @include sm-down() {
    margin-bottom: 10px;
  }
}
</style>
