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
        <li class="govuk-breadcrumbs__list-item">
          <router-link :to="{ name: 'reg-step-two' }">
            Step 2
          </router-link>
        </li>
        <li class="govuk-breadcrumbs__list-item" aria-current="page">Step 3</li>
      </ol>
    </div>

    <form @submit.prevent="onSubmit">
      <div class="govuk-form-group">
        <h1 class="govuk-label-wrapper">
          <label class="govuk-label govuk-label--l" for="email">
            Email
          </label>
        </h1>
        <input class="govuk-input" id="email" name="email" type="email" spellcheck="false" aria-describedby="email-hint" autocomplete="email"
          v-model.trim="form.email"
          @change="setUserField({key: 'email', value: form.email})">
        <div class="govuk-error-message"
          v-if="$v.form.email.$error && !$v.form.email.required">
          Email is required
        </div>
      </div>

      <button class="govuk-button govuk-button--secondary govuk-!-margin-right-7" data-module="govuk-button"
        @click="$router.push('step2')">
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
import { required, email } from 'vuelidate/lib/validators'

export default {
  name: 'reg-step-one',
  data() {
    return {
      form: {
        email: ''
      }
    }
  },
  validations: {
    form: {
      email: { required, email }
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
      this.$router.push({ name: "reg-summary" })
    }
  },
  created() {
    this.form.email = this.user && this.user.email ? this.user.email : ''
  }
}
</script>

