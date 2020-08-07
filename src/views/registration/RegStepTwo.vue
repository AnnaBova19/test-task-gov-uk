<template>
  <div>
    <div class="govuk-breadcrumbs govuk-!-margin-bottom-7">
      <ol class="govuk-breadcrumbs__list">
        <li class="govuk-breadcrumbs__list-item">
          <router-link :to="{ name: 'home' }">
            Home
          </router-link>
        </li>
        <li class="govuk-breadcrumbs__list-item">
          <router-link :to="{ name: 'reg-step-one' }">
            Step 1
          </router-link>
        </li>
        <li class="govuk-breadcrumbs__list-item" aria-current="page">Step 2</li>
      </ol>
    </div>

    <form @submit.prevent="onSubmit">
      <div class="govuk-form-group">
        <fieldset class="govuk-fieldset" role="group" aria-describedby="dob-hint">
          <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
            <h1 class="govuk-fieldset__heading">
              What is your date of birth?
            </h1>
          </legend>
          <div id="dob-hint" class="govuk-hint">
            For example, 31 3 1980
          </div>
          <div class="govuk-date-input" id="dob">
            <div class="govuk-date-input__item">
              <div class="govuk-form-group">
                <label class="govuk-label govuk-date-input__label" for="dob-day">
                  Day
                </label>
                <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="dob-day" name="dob-day" type="text"
                  autocomplete="bday-day" pattern="[0-9]*" inputmode="numeric"
                  v-model.trim="form.dob_day">
              </div>
            </div>
            <div class="govuk-date-input__item">
              <div class="govuk-form-group">
                <label class="govuk-label govuk-date-input__label" for="dob-month">
                  Month
                </label>
                <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="dob-month" name="dob-month" type="text"
                  autocomplete="bday-month" pattern="[0-9]*" inputmode="numeric"
                  v-model.trim="form.dob_month">
              </div>
            </div>
            <div class="govuk-date-input__item">
              <div class="govuk-form-group">
                <label class="govuk-label govuk-date-input__label" for="dob-year">
                  Year
                </label>
                <input class="govuk-input govuk-date-input__input govuk-input--width-4" id="dob-year" name="dob-year" type="text"
                  autocomplete="bday-year" pattern="[0-9]*" inputmode="numeric"
                  v-model.trim="form.dob_year">
              </div>
            </div>
          </div>
        </fieldset>
        <div class="govuk-error-message"
          v-if="$v.form.dob_day.$error && !$v.form.dob_day.required">
          Day is required
        </div>
        <div class="govuk-error-message"
          v-if="$v.form.dob_month.$error && !$v.form.dob_month.required">
          Month is required
        </div>
        <div class="govuk-error-message"
          v-if="$v.form.dob_year.$error && !$v.form.dob_year.required">
          Year is required
        </div>
      </div>

      <button class="govuk-button govuk-button--secondary govuk-!-margin-right-7" data-module="govuk-button"
        @click="$router.push('step1')">
        Back
      </button>

      <button class="govuk-button" data-module="govuk-button" type="submit">
        Continue
      </button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { required } from 'vuelidate/lib/validators'
import moment from 'moment'

export default {
  name: 'reg-step-one',
  data() {
    return {
      form: {
        dob_day: '',
        dob_month: '',
        dob_year: ''
      }
    }
  },
  validations: {
    form: {
      dob_day: { required },
      dob_month: { required },
      dob_year: { required }
    }
  },
  computed: {
    ...mapGetters("registration", ["user"]),
  },
  methods: {
    ...mapActions("registration", ["setUserField"]),
    onSubmit () {
      this.$v.form.$touch()
      if(this.$v.form.$error) return
      this.setUserField({key: 'birth_date', value: new Date(`${this.form.dob_month}.${this.form.dob_day}.${this.form.dob_year}`)})
      this.$router.push({ name: "reg-step-three" })
    }
  },
  created() {
    if (this.user && this.user.birth_date) {
      let d = moment(this.user.birth_date, 'YYYY/MM/DD')
      this.form.dob_day = d.date()
      this.form.dob_month = d.month() + 1
      this.form.dob_year = d.year()
    }
  }
}
</script>