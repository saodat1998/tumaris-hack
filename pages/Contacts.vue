<template>
  <div class="container">
    <div style="position: relative; overflow: hidden">
      <a
        href="https://yandex.ru/maps/10335/tashkent/?utm_medium=mapframe&utm_source=maps"
        style="color: #eee; font-size: 12px; position: absolute; top: 0px"
        >Ташкент</a
      >
      <a
        href="https://yandex.ru/maps/10335/tashkent/house/YkAYdAFpSUcHQFprfX9ycHlmYQ==/?ll=69.269159%2C41.331330&utm_medium=mapframe&utm_source=maps&z=18.98"
        style="color: #eee; font-size: 12px; position: absolute; top: 14px"
        >Улица Зульфияханум, 12 — Яндекс.Карты</a
      >
      <iframe
        src="https://yandex.ru/map-widget/v1/-/CCUY7-ES2A"
        width="100%"
        height="400"
        allowfullscreen="true"
        style="position: relative"
      ></iframe>
    </div>
    <ul>
      <li>Телефон: +998 71 200-08-33</li>
      <li>Адрес: 100060,</li>
      <li>г.Ташкент, 1-проезд ул.Нукус, д.4</li>
    </ul>
    <feedback />
  </div>
</template>
<script>
import Feedback from '../components/feedback'
export default {
  components: { Feedback },
  layout: 'detail',
  data() {
    return {
      title: this.$t('about.about_company'),
    }
  },
}
</script>
