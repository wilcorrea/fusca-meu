<template>
  <dashboard-content :classNames="['hunting-panel']">
    <div slot="header">
      Onde estão os Fuscas?
    </div>
    <div slot="content">

      <q-modal ref="modal" class="maximized" :content-css="{padding: '50px'}">
        <h4>Fuuussscccaaaaa Azzuuuuulll</h4>
        <p>Fight!</p>
        <button class="primary" @click="battleFinish">Finalizar</button>
      </q-modal>

      <div class="find-button">
        <button class="positive rotate raised circular" @click="increment">
          <i>directions_car</i>
        </button>
        <span class="find-button__display">{{ total }}</span>
      </div>

      <div class="danger-button">
        <div class="danger-button__panel">
          <button class="rotate circular" @click="battleStart">
          </button>
        </div>
      </div>
    </div>

  </dashboard-content>
</template>

<script type="text/javascript">
  import DashBoardComponent from 'src/modules/Dashboard/Resources/Component'
  import DashboardContent from 'src/modules/Dashboard/Resources/DashboardContent'

  export default {
    extends: DashBoardComponent,
    name: 'dashboard-hunting',
    components: {
      DashboardContent
    },
    data: () => ({
      total: 0,
      title: 'Caçada'
    }),
    methods: {
      increment () {
        this.total++
      },
      battleStart () {
        this.$refs.modal.open()
      },
      battleFinish () {
        this.$refs.modal.close()
        this.increment()
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .hunting-panel
    max-width 580px
    margin 0 auto
  .find-button, .danger-button
    max-width 460px
    min-width 270px
    margin 0 auto
  .find-button
    padding 30px 0
    .find-button__display
      font-size 32px
      float right
      padding 10px
      text-align right
      border-radius 4px
      background-color #323232
      color #fff
      min-width calc(100% - 80px)
  .danger-button
    margin 0 auto 40px auto
    padding 10px
    background-color #F8DD5D
    border-radius 4px
    .danger-button__panel
      padding 40px
      text-align center
      background-image repeating-linear-gradient(45deg, #F8DD5D, #F8DD5D 10px, #372e18 10px, #372e18 20px)
      button
        position relative
        width 72px
        height 72px
        border 1px solid #903030
        &:before
          content ""
          position absolute
          width 72px
          height 72px
          border-radius 36px
          top 0
          left 0
          z-index 0
          transition transform .3s
          background-image url("/statics/images/fusca-meu-logo.png")
          background-color #0099FF
          background-repeat no-repeat
          background-size 80%
          background-position center
      button:before
        box-shadow inset -2px 1px 6px 2px rgba(0, 0, 0, .1), inset 3px -2px 4px 3px rgba(0, 0, 0, .285), 0 3px 6px rgba(0,0,0,0.46), 0 3px 6px rgba(0,0,0,0.63) !important
      button:active:before
        box-shadow inset -2px 1px 6px 2px rgba(0, 0, 0, .2), inset 3px -2px 4px 3px rgba(0, 0, 0, .4), 0 3px 6px rgba(0,0,0,0.55), 0 3px 6px rgba(0,0,0,0.7) !important
      button:hover:before
        transform: rotate(360deg)
        box-shadow inset -2px 1px 6px 2px rgba(0, 0, 0, .07), inset 3px -2px 4px 3px rgba(0, 0, 0, .2), 0 3px 6px rgba(0,0,0,0.3), 0 3px 6px rgba(0,0,0,0.5) !important
</style>
