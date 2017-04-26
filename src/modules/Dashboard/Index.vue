<template>
  <div>
    <app-layout :left="left" :right="right" :footer="footer" :swipe="swipe" :flat="flat">
      <app-toolbar slot="header">
        <div slot="right">
        </div>
      </app-toolbar>
    </app-layout>
  </div>
</template>

<script type="text/javascript">
  import AppLayout from 'modules/Common/Layout/AppLayout.vue'
  import AppToolbar from 'src/modules/Common/Layout/AppToolbar.vue'
  import {mapActions} from 'vuex'

  export default {
    name: 'dashboard',
    components: {
      AppLayout, AppToolbar
    },
    methods: {
      ...mapActions(['setAppMenuLeft'])
    },
    data: () => ({
      left: true,
      right: false,
      footer: false,
      swipe: false,
      flat: true
    }),
    created () {
      this.setAppMenuLeft([
        {
          icon: 'store',
          to: {
            path: '/', exact: true
          },
          label: 'Home'
        },
        {
          icon: 'assessment',
          to: {
            path: '/rankings', exact: true
          },
          label: 'Rankings'
        },
        {
          icon: 'grade',
          to: {
            path: '/custom', exact: true
          },
          label: 'Custom'
        }
      ])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
