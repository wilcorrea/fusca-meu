<template>
  <q-drawer ref="drawer" :class="classNames" :swipe-only="swipe">
    <div class="toolbar sub-toolbar">
      <div class="avatar-image" style="background-image: url('/statics/images/fusca-meu-logo.png')"></div>
    </div>
    <div class="list no-border platform-delimiter">
      <q-drawer-link v-for="__item in getAppMenuLeft"
                     :key="__item.icon" :icon="__item.icon" :to="__item.to">
        {{ __item.label }}
      </q-drawer-link>
    </div>
  </q-drawer>
</template>

<script type="text/javascript">
  import Drawer from 'src/modules/Common/Layout/Drawer'

  export default Drawer('left')
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .drawer
    .avatar-image
      width 180px
      border-radius 50%
      height 180px
      margin 10px auto 0 auto
      position relative
      background-position center
      background-repeat no-repeat
      background-size contain
      box-shadow 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)
    .field-search
      color #fff
    .field-search::placeholder
      color #fff
  @media screen and (min-width: 768px)
    .drawer:not(.active):not(.swipe-only)
      z-index 1
    .flat.drawer.left-side:not(.active):not(.swipe-only)
      position fixed !important
      top 0
      bottom 0
      z-index 12
      user-select none
      .toolbar
        box-shadow 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)
</style>
