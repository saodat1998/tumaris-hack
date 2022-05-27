import Vue from 'vue'
export default async ({ store }) => {
  await Vue.mixin({
    created() {
      store.dispatch('window/checkWindow')
    },
    methods: {
      getImageUrl(path, size, hasCheckFormat) {
        return path
        /* const noImageUrl =
          'https://ucarecdn.com/ed57e4e5-c438-49cf-a39d-b4711bf10aea/unnamed.png' */

        /* if (!path) {
          if (size) {
            return (
              process.env.IMAGE_OPTIZATION_URL + `/unsafe/${size}/${noImageUrl}`
            )
          }
          return noImageUrl
        } else {
          const allowedFormat = /^.*\.(JPG|jpg|gif|GIF|jpeg|JPEG|png|PNG|webp|WEBP)$/.test(
            path
          )
          if (!hasCheckFormat && !allowedFormat) {
            if (size) {
              return (
                process.env.IMAGE_OPTIZATION_URL +
                `/unsafe/${size}/${noImageUrl}`
              )
            } else {
              return noImageUrl
            }
          }

          if (size) {
            return (
              process.env.IMAGE_OPTIZATION_URL +
              `/unsafe/${size}/${process.env.BASE_URL_IMAGE}` +
              path
            )
          } else {
            return process.env.BASE_URL_IMAGE + path
          }
        } */
      },
    },
  })
}
