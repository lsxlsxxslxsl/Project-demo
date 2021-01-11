import { ref, onMounted, watch } from 'vue'
import api from '../api'

export default function useOrderList(userid: any) {
  const orderList: any = ref([])
  const getOrderList = async () => {
    orderList.value = await api.getOrderList(userid.value)
  }

  onMounted(getOrderList)

  watch(userid, getOrderList)

  return {
    orderList,
    getOrderList
  }
}
