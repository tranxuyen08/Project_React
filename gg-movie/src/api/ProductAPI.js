import axiosClient from "./axiosClient"

class ProductsAPI {
  static getAllProducts(){
    const url = "products"
    return axiosClient.get(url,{})
  }
  static deleteProduct(id){
    const url = `products/${id}`
    return axiosClient.delete(url)
  }
  static postProduct(param){
    const url = "products"
    return axiosClient.post(url,param)
  }
  static updateProduct(param) {
    const url = `products/${param.id}`
    return axiosClient.patch(url,param)
  }
}
export default ProductsAPI
