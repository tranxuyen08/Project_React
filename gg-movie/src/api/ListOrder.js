import axiosClient from "./axiosClient"

class ListOrdersAPI {
  static postListOrders(param){
    const url = "/listOrders"
    return axiosClient.post(url,param)
  }
  static getListOrders(){
    const url = "/listOrders"
    return axiosClient.get(url)
  }
  static deleteListOrder (id){
    const url = `/listOrders/${id}`
    return axiosClient.delete(url)
  }
}
export default ListOrdersAPI