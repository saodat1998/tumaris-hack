<template>
  <div style="padding-left: 20px">
    <h4>Balance</h4>
    <div>
      <p style="font-size: 18px">Your balance: 0 USD</p>
      <p style="font-size: 18px">Your frozen money: 0 USD</p>
      <p style="font-size: 20px; font-weight: 700">START earn with me!!!</p>
    </div>
    <courses-list />
    <div></div>
  </div>
</template>

<script>
import CoursesList from '~/components/sections/CoursesList'
export default {
  components: {
    CoursesList,
  },
  layout: 'profile',
}
</script>
