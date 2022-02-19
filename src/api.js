import axios from 'axios';
import Cookies from "universal-cookie"
import { Notyf } from 'notyf'

const httpClient = axios.create({
  baseURL: `http://3.209.97.189:8090/api/auth/v1/web/`,
  // withCredentials: true
});

httpClient.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
httpClient.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
httpClient.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS';
httpClient.defaults.headers.post['Content-Type'] = 'application/json';
httpClient.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest';
httpClient.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
httpClient.defaults.headers.post['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS';

const cookie = new Cookies();


httpClient.interceptors.request.use(
    config => {
      // if (!config.headers.Authorization) {
      //   const token = JSON.parse(localStorage.getItem("keyCloak")).token;
  
      let token = cookie.get("access_token");
  
      if (token) {
        config.headers = Object.assign(config.headers, { "Authorization": "Bearer " + token });
        return config;
      } else {
        return config
      }
    },
    error => Promise.reject(error)
  );

  httpClient.interceptors.response.use(response => {
  // Edit response config
  return response;
}, error => {
  const notyf = new Notyf()

  if (!error.response) {
    notyf.error("No internet connection!")
  }

  if (parseInt(error.response?.status) === 422) {
    notyf.error(error.response.data.message)
  }

  if (parseInt(error.response?.status) === 401) {
    notyf.error(error.response.data.message)
    cookie.remove("access_token")
    window.location.href = "/login"
  }

  if (parseInt(error.response?.status) === 403) {
    notyf.error(error.response.data.message)
    cookie.remove("access_token")
    window.location.href = "/login"
  }

  if (parseInt(error.response?.status) === 413) {
    notyf.error(error.response.data.message)
  }
  return Promise.reject(error);
});

export const httpGet = (params) => httpClient.request({
  method: 'get',
  ...params
});

export const httpPost = (params) => httpClient.request({
  method: 'post',
  ...params
})


export const httpDelete = (params) => httpClient({
  method: 'delete',
  ...params
});

export const httpPut = (params) => httpClient({
  method: 'put',
  ...params
});