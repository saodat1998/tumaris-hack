import data from '../../data/course/courseCategoryList.json'
export default {
  get() {
    return [200, data]
  },
}
