<template>
  <div>
    <div class="govuk-breadcrumbs govuk-!-margin-bottom-7">
      <ol class="govuk-breadcrumbs__list">
        <li class="govuk-breadcrumbs__list-item">
          <router-link :to="{ name: 'home' }">
            Home
          </router-link>
        </li>
        <li class="govuk-breadcrumbs__list-item" aria-current="page">Step 1</li>
      </ol>
    </div>

    <form @submit.prevent="onSubmit">
      <div class="govuk-form-group">
        <h1 class="govuk-label-wrapper">
          <label class="govuk-label govuk-label--l" for="first-name">
            First name
          </label>
        </h1>
        <input class="govuk-input" id="first-name" name="first-name" type="text"
          v-model.trim="form.first_name"
          @change="setUserField({key: 'first_name', value: form.first_name})">
        <div class="govuk-error-message"
          v-if="$v.form.first_name.$error && !$v.form.first_name.required">
          First name is required
        </div>
      </div>

      <div class="govuk-form-group">
        <h1 class="govuk-label-wrapper">
          <label class="govuk-label govuk-label--l" for="last-name">
            Last name
          </label>
        </h1>
        <input class="govuk-input" id="last-name" name="last-name" type="text"
          v-model.trim="form.last_name"
          @change="setUserField({key: 'last_name', value: form.last_name})">
        <div class="govuk-error-message"
          v-if="$v.form.last_name.$error && !$v.form.last_name.required">
          Last name is required
        </div>
      </div>
      <button class="govuk-button" data-module="govuk-button" type="submit">
        Continue
      </button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { required } from 'vuelidate/lib/validators'

export default {
  name: 'reg-step-one',
  data() {
    return {
      form: {
        first_name: '',
        last_name: ''
      }
    }
  },
  validations: {
    form: {
      first_name: { required },
      last_name: { required }
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
      this.$router.push({ name: "reg-step-two" })
    }
  },
  created() {
    this.form.first_name = this.user && this.user.first_name ? this.user.first_name : ''
    this.form.last_name = this.user && this.user.last_name ? this.user.last_name : ''
  }
}
</script>
