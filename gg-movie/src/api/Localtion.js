import axiosClient from "./axiosClient"

class LocaltionAPI {
  static getAllLocaltion() {
    const url = "movieVenue"
    return axiosClient.get(url)
  }
}
export default LocaltionAPI