import { mapActions } from 'vuex'

export default {
  name: 'dashboard-component',
  props: {},
  data: () => ({
    title: ''
  }),
  computed: {},
  methods: {
    ...mapActions(['setAppTitle'])
  },
  created () {
  },
  mounted () {
    this.setAppTitle(this.title)
  }
}
