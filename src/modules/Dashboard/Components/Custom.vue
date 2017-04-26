<template>
  <dashboard-content>
    <div slot="header">Header</div>
    <div slot="content">Container</div>
  </dashboard-content>
</template>

<script type="text/javascript">
  import DashBoardComponent from 'src/modules/Dashboard/Resources/Component'
  import DashboardContent from 'src/modules/Dashboard/Resources/DashboardContent'

  export default {
    extends: DashBoardComponent,
    name: 'dashboard-custom',
    components: {
      DashboardContent
    },
    data: () => ({
      title: 'Customização'
    })
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
