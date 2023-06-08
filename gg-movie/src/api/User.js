import  axiosClient  from "./axiosClient"

export class UserAPI{
  static register (param) {
    const url = "/users"
    return axiosClient.post(url, param)
  }
  static login (param){
    const url = "/login"
    return axiosClient.post(url,param)
  }
}