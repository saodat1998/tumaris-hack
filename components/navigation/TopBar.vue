<template>
  <div class="topbar">
    <b-container>
      <div class="topbar--content">
        <company-address />
        <div class="phone">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            x="0"
            y="0"
            viewBox="0 0 128 128"
            style="enable-background: new 0 0 512 512"
            class=""
          >
            <g>
              <g
                id="Circle_Grid"
                xmlns="http://www.w3.org/2000/svg"
                data-name="Circle Grid"
              >
                <circle
                  cx="64"
                  cy="64"
                  fill="#D3A785"
                  r="64"
                  data-original="#ef5261"
                  style=""
                  class=""
                />
              </g>
              <g id="icon" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="m57.831 70.1c8.79 8.79 17.405 12.356 20.508 9.253l4.261-4.26a7.516 7.516 0 0 1 10.629 0l9.566 9.566a7.516 7.516 0 0 1 0 10.629l-7.453 7.453c-7.042 7.042-27.87-2.358-47.832-22.319-9.976-9.981-16.519-19.382-20.748-28.222s-5.086-16.091-1.567-19.61l7.453-7.453a7.516 7.516 0 0 1 10.629 0l9.566 9.563a7.516 7.516 0 0 1 0 10.629l-4.264 4.271c-3.103 3.1.462 11.714 9.252 20.5z"
                  fill="#eeefee"
                  data-original="#eeefee"
                  style=""
                  class=""
                />
              </g>
            </g>
          </svg>
          <a class="phone--text" href="tel:+123456789">+12 345 67 89</a>
          &nbsp;|&nbsp;
          <svg
            width="20"
            height="20"
            x="0"
            y="0"
            viewBox="0 0 24 24"
            style="enable-background: new 0 0 512 512"
          >
            <g>
              <circle
                xmlns="http://www.w3.org/2000/svg"
                cx="12"
                cy="12"
                fill="#D3A785"
                r="12"
                data-original="#039be5"
                style=""
              />
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="m5.491 11.74 11.57-4.461c.537-.194 1.006.131.832.943l.001-.001-1.97 9.281c-.146.658-.537.818-1.084.508l-3-2.211-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953z"
                fill="#ffffff"
                data-original="#ffffff"
                style=""
              />
            </g>
          </svg>
          <a
            class="phone--text"
            target="_blank"
            href="https://t.me/mirjamolmamatov"
            >{{ $t('top-bar.write_telegram') }}</a
          >
        </div>
        <div class="page-links">
          <a href="/page/1">{{ $t('menu.about_company') }}</a
          >&nbsp;|&nbsp;
          <a href="/contacts">{{ $t('menu.contacts') }}</a>
        </div>
      </div>
    </b-container>
  </div>
</template>
<script>
export default {
  name: 'TopBar',
  methods: {
    async changeLang(lang) {
      if (this.$i18n.locale === lang) return
      await this.$router.push(this.switchLocalePath(lang))
    },
  },
}
</script>
<style lang="scss" scoped>
.topbar {
  background: var(--dark);
  color: var(--white);
  font-size: 13px;
  line-height: 18px;
  @include sm-down() {
    display: none;
  }
  &--content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 41px;
  }
  a {
    color: var(--white);
  }
}
</style>
