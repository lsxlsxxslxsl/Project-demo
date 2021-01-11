import { userOrder } from '../constant'

const api = {
  getOrderList(userid: number): Promise<any[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(userOrder[userid])
      }, 500)
    })
  }
}

export default api
