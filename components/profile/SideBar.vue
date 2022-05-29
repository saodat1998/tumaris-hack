<template>
  <div>
    <b-sidebar
      id="sidebar-variant"
      style="z-index: 1"
      sidebar-class="test"
      visible
      no-header
      no-close-on-route-change
      title="Sidebar"
      bg-variant="dark"
      text-variant="light"
      shadow
    >
      <div class="px-3 py-2">
        <div class="profile-style">
          <nuxt-link :to="{ name: 'profile' }"> Profile </nuxt-link>
        </div>
        <div class="profile-style">
          <nuxt-link :to="{ name: 'balance' }"> Balance </nuxt-link>
        </div>
        <div class="profile-style">
          <nuxt-link :to="{ name: 'profile_courses' }"> Courses </nuxt-link>
        </div>
        <div class="profile-style">
          <nuxt-link to="balance"> Tasks </nuxt-link>
        </div>
      </div>
    </b-sidebar>
  </div>
</template>
<style>
.test {
  top: 56px;
}
.profile-style {
  padding: 20px;
  font-size: 16px;
}
</style>
