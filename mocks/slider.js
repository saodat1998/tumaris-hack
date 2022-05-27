import data from './data/slides.json'
export default {
  get() {
    return [200, data]
  },
}
