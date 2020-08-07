<template>
  <div class="govuk-grid-row">
    <div class="govuk-grid-column-full">
      <h1 class="govuk-heading-xl">Welcome!</h1>

      <router-link :to="{ name: 'registration' }">
        <button class="govuk-button" data-module="govuk-button">
          Register
          <svg class="govuk-button__start-icon" xmlns="http://www.w3.org/2000/svg" width="17.5" height="19" viewBox="0 0 33 40" aria-hidden="true" focusable="false">
            <path fill="currentColor" d="M0 0h13l20 20-20 20H0l20-20z" />
          </svg>
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: 'home',
  methods: {
    ...mapActions("registration", ["resetState"]),  
  },
  created() {
    this.resetState()
  }
}
</script>
