<template>
  <div class="app-toolbar">
    <div class="on-left">
      <slot name="left">{{ getAppTitle }}</slot>
    </div>
    <div class="on-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script type="text/javascript">
  import {mapGetters} from 'vuex'
  export default {
    name: 'app-toolbar',
    props: {},
    data: () => ({
      title: 'Title'
    }),
    computed: {
      ...mapGetters(['getAppTitle'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app-toolbar
    width 100%
    padding 0 50px 0 10px
    .on-left
      float left
    .on-right
      float right
</style>
