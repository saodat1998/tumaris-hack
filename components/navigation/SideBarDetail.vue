<template>
  <div class="left_block">
    <aside class="sidebar left_menu_1">
      <h3>{{ title }}</h3>
      <ul class="nav nav-list side-menu">
        <li v-for="(item, index) in items" :key="index" class="">
          <a class="" target="" :href="item.url">
            {{ $t(item.i18n) }}
          </a>
        </li>
      </ul>
    </aside>
    <div class="sidearea">
      <div class="include"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SideBarDetail',
  props: {
    title: {
      type: String,
      default: '',
    },
    items: {
      type: [Array, Object],
      default() {
        return []
      },
    },
  },
}
</script>
<style lang="scss" scoped>
.side-menu li {
  line-height: 16px;
  padding: 0px;
  margin-bottom: 0px;
}
.left_menu_1 .side-menu > li {
  border-top: 1px solid #ebebef;
  border-bottom: 1px solid #ebebef;
  margin-top: -1px;
}

.left_menu_1 .side-menu > li > a {
  font-size: 0.9335em;
  line-height: 18px;
  padding: 26px 20px 25px 20px;
}
.side-menu > li > a {
  font-size: 0.933em;
  line-height: 20px;
  position: relative;
  text-decoration: none;
  padding: 14px 47px 14px 19px;
  font-weight: normal;
}
.nav > li,
.nav > li > a {
  display: block;
  position: relative;
  width: 100%;
}
</style>
