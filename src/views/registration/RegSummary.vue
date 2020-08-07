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
        <li class="govuk-breadcrumbs__list-item">
          <router-link :to="{ name: 'reg-step-three' }">
            Step 3
          </router-link>
        </li>
        <li class="govuk-breadcrumbs__list-item" aria-current="page">Summary</li>
      </ol>
    </div>

    <h1 class="govuk-heading-l">Summary</h1>

    <dl class="govuk-summary-list">
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Name
        </dt>
        <dd class="govuk-summary-list__value">
          {{user.first_name}} {{user.last_name}}
        </dd>
      </div>
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Date of birth
        </dt>
        <dd class="govuk-summary-list__value">
          {{user.birth_date | moment("dddd, MMMM Do YYYY")}}
        </dd>
      </div>
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Contact details
        </dt>
        <dd class="govuk-summary-list__value">
          <p class="govuk-body">{{user.email}}</p>
        </dd>
      </div>
    </dl>

    <button class="govuk-button govuk-button--secondary govuk-!-margin-right-7" data-module="govuk-button"
      @click="$router.push('step3')">
      Back
    </button>

    <button class="govuk-button" data-module="govuk-button" type="submit" @click="register">
      Confirm &amp; Register
    </button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: 'reg-summary',
  computed: {
    ...mapGetters("registration", ["user"]),
  },
  methods: {
    register() {
      this.$router.push({ name: "reg-confirm" })      
    }
  }
}
</script>