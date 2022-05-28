<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group id="input-group-3" label="Your Name:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.name"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-4"
        label="Your Surname:"
        label-for="input-4"
      >
        <b-form-input
          id="input-4"
          v-model="form.surname"
          placeholder="Enter surname"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-5"
        label="Your Surname:"
        label-for="input-5"
      >
        <b-form-input
          id="input-5"
          v-model="form.age"
          placeholder="Enter your age"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Password" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.password"
          type="password"
          placeholder="Enter password"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  layout: 'auth',
  data() {
    return {
      form: {
        name: '',
        surname: '',
        email: '',
        password: '',
        age: '',
      },
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.name = ''
      this.form.surname = ''
      this.form.email = ''
      this.form.password = ''
    },
  },
}
</script>

<style scoped></style>
