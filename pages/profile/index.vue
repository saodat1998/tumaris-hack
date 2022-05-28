<template>
  <div style="padding-left: 20px">
    <h4>Profile</h4>
    <div>
      <b-form-group
        v-slot="{ ariaDescribedby }"
        label="Please choose one of them"
      >
        <b-form-radio
          v-model="selected"
          :aria-describedby="ariaDescribedby"
          name="some-radios"
          value="A"
          >Are you pregnant?</b-form-radio
        >
        <b-form-radio
          v-model="selected"
          :aria-describedby="ariaDescribedby"
          name="some-radios"
          value="B"
          >Are you mom?</b-form-radio
        >
      </b-form-group>

      <div v-if="selected === 'A'" class="mt-3">
        <div class="row">
          <div class="col-md-6">
            <label>Please, enter your passport details</label>
            <div class="row">
              <div class="col-md-2">
                <div class="form-group">
                  <input
                    v-model="form.passport_seria"
                    type="text"
                    placeholder="AA"
                    class="form-control"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <input
                    v-model="form.passport_number"
                    type="text"
                    placeholder="1234567"
                    class="form-control"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-8">
                <label>Please indicate the gestational age</label>
                <div class="form-group">
                  <input
                    v-model="form.passport_seria"
                    type="text"
                    placeholder="24"
                    class="form-control"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-8">
                <label> Please, enter your reference about pregnancy</label>
                <b-form-file
                  v-model="form.file"
                  :state="Boolean(form.file)"
                  placeholder="Choose a file..."
                ></b-form-file>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <b-form-group
              v-slot="{ ariaDescribedby }"
              label="Please choose one of them"
            >
              <b-form-radio
                v-model="wanted"
                :aria-describedby="ariaDescribedby"
                name="some-radios"
                value="A"
                >I want to take a course</b-form-radio
              >
              <b-form-radio
                v-model="wanted"
                :aria-describedby="ariaDescribedby"
                name="some-radios"
                value="B"
                >I want to work</b-form-radio
              >
            </b-form-group>
            <div><button class="send-btn">Send</button></div>
          </div>
        </div>
      </div>
      <div v-if="selected === 'B'" class="mt-3">
        <div class="row">
          <div class="col-md-6">
            <label>Please, download your passport details</label>
            <div class="row">
              <div class="col-md-2">
                <div class="form-group">
                  <input
                    v-model="form.passport_seria"
                    type="text"
                    placeholder="AA"
                    class="form-control"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <input
                    v-model="form.passport_number"
                    type="text"
                    placeholder="1234567"
                    class="form-control"
                  />
                </div>
              </div>
            </div>
            <label>How old is your baby?</label>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <input
                    v-model="form.baby_old"
                    type="text"
                    placeholder="1 month"
                    class="form-control"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-8">
                <label> Please, download birth certificate of your baby</label>
                <b-form-file
                  v-model="form.file"
                  :state="Boolean(form.file)"
                  placeholder="Choose a file..."
                ></b-form-file>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <b-form-group
              v-slot="{ ariaDescribedby }"
              label="Please choose one of them"
            >
              <b-form-radio
                v-model="wanted"
                :aria-describedby="ariaDescribedby"
                name="some-radios"
                value="A"
                >I want to take a course</b-form-radio
              >
              <b-form-radio
                v-model="wanted"
                :aria-describedby="ariaDescribedby"
                name="some-radios"
                value="B"
                >I want to work</b-form-radio
              >
            </b-form-group>
            <div><button class="send-btn">Send</button></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'profile',
  data() {
    return {
      selected: '',
      wanted: '',
      form: {
        reference: '',
        passport_number: '',
        passport_seria: '',
        baby_old: '',
      },
    }
  },
}
</script>

<style scoped>
.send-btn {
  background-color: #00b2a9;
  position: absolute;
  right: 40%;
  width: 90px;
  bottom: 0;
  padding: 5px;
  border: none;
  color: #fff;
  border-radius: 25px;
}
</style>
