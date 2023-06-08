import axiosClient from "./axiosClient"

class ListOrdersAPI {
  static postListOrders(param){
    const url = "/listOrders"
    return axiosClient.post(url,param)
  }
}
export default ListOrdersAPI