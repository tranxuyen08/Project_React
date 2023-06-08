import axios from "axios";
const axiosClient = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {
    "Content-Type" : "application/json"
  },
})

axiosClient.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const accessToken = localStorage.getItem("access_token");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  function (error) {
    // Do something with request error

    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    const { config, status, data } = error.response;

    if (config.url === "/users" && status === 400) {
      throw new Error(data)
    }
    if (config.url === "/login" && status === 400) {
      throw new Error(data)
    }
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axiosClient