<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    <router-view></router-view>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  /*
   * Root component
   */
  export default {
    name: 'root',
    computed: {
      ...mapGetters(['getAppTitle'])
    },
    watch: {
      getAppTitle () {
        this.updateTitle()
      }
    },
    methods: {
      updateTitle () {
        // noinspection JSValidateTypes
        window.document.title = this.getAppTitle
      }
    },
    mounted () {
      this.updateTitle()
    }
  }
</script>

<style></style>
