<template>
  <div class="card--container template">
    <img class="card--bg-image" src="/img/balance/WALLET.png" />
    <div class="card--content">
      <div class="card--content__sub">
        <div class="title card--title">{{ Wallet }}</div>
        <div class="card--logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="31"
            viewBox="0 0 28 31"
            fill="none"
          >
            <path
              d="M26.1617 15.494V12.7842C26.1617 10.575 24.3708 8.78418 22.1617 8.78418H5C2.79086 8.78418 1 10.575 1 12.7842V19.2682V25.7522C1 27.9614 2.79086 29.7522 5 29.7522H22.1617C24.3708 29.7522 26.1617 27.9614 26.1617 25.7522V23.0425"
              stroke="#F9C900"
              stroke-width="2"
            />
            <path
              d="M16.097 19.2664C16.097 17.182 17.7868 15.4922 19.8713 15.4922H27.0004V23.0407H19.8713C17.7868 23.0407 16.097 21.3509 16.097 19.2664V19.2664Z"
              stroke="#F9C900"
              stroke-width="2"
              stroke-linejoin="round"
            />
            <circle cx="19.8721" cy="19.2683" r="1.25808" fill="#F9C900" />
            <path
              d="M4.39185 8.78418L16.846 3.5516C18.8825 2.69599 21.227 3.65305 22.0829 5.68938L23.3838 8.78448"
              stroke="#F9C900"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <b-row no-gutters align="center" justify="space-between">
          <b-col cols="12" sm="9">
            <p class="pan">USD-91323482401-0001</p>
          </b-col>
          <b-col cols="12" sm="12">
            <p class="balance">100 USD</p>
          </b-col>
        </b-row>
        <b-progress
          height="25px"
          class="w-100"
          value="200"
          max="270"
          show-progress
          animated
        >
          <b-progress-bar :value="200">
            <span>Time left: <strong>79 days</strong></span>
          </b-progress-bar>
        </b-progress>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  &--container {
    position: relative;
    cursor: pointer;
    // max-width: 100%;
    border-bottom: 6px solid transparent;
    max-width: 340px;
  }
  &--content {
    position: relative;
    color: #ffffff !important;
    padding: 45px 8px 8px;
    text-align: left;
    min-height: 205px;

    p {
      margin-bottom: 0;
    }

    &__imaged {
      padding: 10px;
    }

    &__sub {
      padding: 10px;
      background-color: rgba(34, 34, 34, 0.2);
      overflow: hidden;
      -webkit-backdrop-filter: blur(30px);
      backdrop-filter: blur(30px);
      border-radius: 10px;
    }
  }
  &--bg-image {
    position: absolute;
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    left: 0;
  }

  &--title {
    display: inline-block;
    margin-bottom: 16px;
  }
  &--logo {
    float: right;
    width: 45px;
    background: #ffffff;
    border-radius: 6px;
    text-align: center;
    padding: 5px;
    img {
      vertical-align: middle;
    }
  }

  &--container.template .card--content__sub {
    border-radius: 10px;
  }
}

.active .card--container {
  border-bottom: 6px solid var(--v-primary-base);
  border-radius: 15px;
}
.balance {
  font-size: 32px;
  text-align: left;
}
.pan {
  font-size: 1rem !important;
  letter-spacing: 0.03125em !important;
  line-height: 1.5rem;
  text-align: left;
}
</style>
