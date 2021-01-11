import api from '../api'

// orderList-mixin
export default {
  data() {
    return {
      orderList: []
    }
  },
  watch: {
    userid() {
      this.getOrderList()
    }
  },
  created() {
    this.getOrderList()
  },
  methods: {
    async getOrderList() {
      this.orderList = await api.getOrderList(this.userid)
    }
  }
}
