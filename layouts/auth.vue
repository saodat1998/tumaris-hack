<template>
  <div class="auth">
    <div class="auth--card">
      <Nuxt />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.auth {
  background-image: url('/img/pregnancy/2.jpg');
  height: 100vh;
  background-size: cover;
  width: 100%;
  padding: 100px;
  &--card {
    background: white;
    border-radius: 20px;
    width: 500px;
    margin-left: auto;
    margin-right: auto;
    padding: 20px;
  }
}
</style>
