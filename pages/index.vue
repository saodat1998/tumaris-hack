<template>
  <div>
    <home-banner />
    <about />
    <courses-list />
    <news />
    <services />
    <finished-courses />
    <partners />
  </div>
</template>
<script>
import HomeBanner from '../components/banners/HomeBanner'
import CoursesList from '../components/sections/CoursesList'
import News from '../components/sections/News'
import About from '../components/sections/About'
import Services from '../components/sections/Services'
import FinishedCourses from '../components/sections/FinishedCourses'
import Partners from '../components/sections/Partners'
export default {
  components: {
    Partners,
    FinishedCourses,
    Services,
    About,
    News,
    CoursesList,
    HomeBanner,
  },
}
</script>
