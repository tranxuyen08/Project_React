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
}
export default ProductsAPI
