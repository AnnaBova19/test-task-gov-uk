<template>
  <div id="app">
    <app-header></app-header>
    
    <div class="govuk-width-container app-width-container">
      <main class="govuk-main-wrapper " id="main" role="main">
        <router-view/>
      </main>
    </div>

    <app-footer></app-footer>
  </div>
</template>

<script>
import { AppHeader, AppFooter } from '../src/layouts';

export default {
  name: 'app',
  components: { AppHeader, AppFooter }
}
</script>

<style lang="scss" src="./styles/main.scss"></style>
