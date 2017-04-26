<template>
  <dashboard-content>
    <div slot="header">
      <ul class="breadcrumb" style="margin: 0">
        <li><a><i>store</i></a></li>
      </ul>
    </div>
    <div slot="content">
      <table :class="['q-table', 'bordered', 'horizontal-delimiter', 'loose', 'responsive']" style="width: 100%">
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-th="Descrição">Viagem para Vitória</td>
            <td data-th="Data">10/10/2010</td>
          </tr>
          <tr>
            <td data-th="Descrição">Viagem para Paty</td>
            <td data-th="Data">10/10/2010</td>
          </tr>
        </tbody>
      </table>
      <button class="primary raised circular fixed-bottom-right rotate" @click="$router.push('/hunting')">
        <i>add</i>
      </button>
    </div>
  </dashboard-content>
</template>

<script type="text/javascript">
  import DashBoardComponent from 'src/modules/Dashboard/Resources/Component'
  import DashboardContent from 'src/modules/Dashboard/Resources/DashboardContent'

  export default {
    extends: DashBoardComponent,
    name: 'dashboard-home',
    components: {
      DashboardContent
    },
    data: () => ({
      title: 'Home'
    })
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
