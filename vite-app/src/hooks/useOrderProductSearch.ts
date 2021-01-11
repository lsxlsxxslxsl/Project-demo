import { ref, computed } from 'vue'

export default function useOrderProductSearch(orderList: any) {
  const searchQuery = ref('')
  const orderListMatchSearchQuery = computed(() => {
    console.error('orderList', orderList.value)
    return orderList.value.filter((item: any) => item.product.includes(searchQuery.value))
  })

  return {
    searchQuery,
    orderListMatchSearchQuery
  }
}
