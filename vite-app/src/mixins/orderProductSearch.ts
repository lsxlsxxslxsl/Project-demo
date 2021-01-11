// orderProductSearch-mixin
export default {
  data() {
    return {
      searchQuery: ''
    }
  },
  computed: {
    orderListMatchSearchQuery() {
      return this.orderList.filter((item: any) => item.product.includes(this.searchQuery))
    }
  }
}
