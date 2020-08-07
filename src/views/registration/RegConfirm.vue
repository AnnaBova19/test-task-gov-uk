<template>
  <div>
    <div class="govuk-panel govuk-panel--confirmation">
      <h1 class="govuk-panel__title">
        Registration complete
      </h1>
      <div class="govuk-panel__body">
        <strong>Thank you!</strong>
      </div>
    </div>

    <router-link :to="{ name: 'home' }">
      <button class="govuk-button" data-module="govuk-button">
        Go to Home page
      </button>
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: 'reg-confirm',
  computed: {
    ...mapGetters("registration", ["user"]),
  },
  created() {
    console.log('user details: ', this.user)
  }
}
</script>
