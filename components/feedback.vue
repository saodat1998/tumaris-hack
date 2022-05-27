<template>
  <div>
    <hr />
    <div v-if="!send">
      <div class="row" style="text-align: center; justify-content: center">
        <h2>Leave a request for feedback</h2>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Name</label>
            <input
              v-model="fullName"
              type="text"
              placeholder="Name"
              class="form-control"
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label>Phone number</label>
            <input
              v-model="phone"
              type="text"
              placeholder="Phone number"
              class="form-control"
            />
          </div>
        </div>
        <div class="col-md-12">
          <div class="form-group">
            <label>Comments</label>
            <textarea
              v-model="message"
              type="text"
              placeholder="I want detailed information"
              class="form-control"
            />
          </div>
        </div>
      </div>
      <div class="row" style="text-align: center; justify-content: center">
        <a class="btn btn-success" href="javascript:void(0)" @click="submit">
          Submit</a
        >
      </div>
    </div>

    <div v-else style="text-align: center">
      <h3 style="color: #3c763d">Your application is accepted</h3>
      Our manager will contact you during the day to clarify the details.
    </div>
  </div>
</template>

<script>
export default {
  name: 'Feedback',
  data() {
    return {
      send: false,
      fullName: '',
      phone: '+111',
      message: '',
    }
  },
  methods: {
    submit() {
      alert('Thanks for filling!')
      this.send = true
    },
  },
}
</script>
