import axiosClient from "./axiosClient"

class ProductsAPI {
  static getAllProducts(){
    const url = "products"
    return axiosClient.get(url,{})
  }
}
export default ProductsAPI
