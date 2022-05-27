import data from '../data/manager/detail.json'
export default {
  get({ values }) {
    return [200, data]
  },
}
