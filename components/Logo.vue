<template>
  <div class="logo-brand">
    <img src="/img/logo.svg" />
  </div>
</template>
<script>
export default {
  props: {
    imgPath: {
      type: String,
      default: '/img/logo.svg',
    },
  },
}
</script>
<style>
.logo {
  animation: 1s appear;
  margin: auto;
  width: 134px;
  height: 31px;
  object-fit: contain;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
.logo-brand > img {
  height: 30px;
}
@media (max-width: 774px) {
  .logo-brand > img {
    height: 23px;
  }
}
</style>
