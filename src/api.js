import axios from 'axios';

const httpClient = axios.create({
  baseURL: `https://hotels-com-provider.p.rapidapi.com/v1/hotels`,
  // withCredentials: true
});

httpClient.defaults.headers.common['x-rapidapi-host'] = 'hotels-com-provider.p.rapidapi.com';
httpClient.defaults.headers.common['x-rapidapi-key'] = '63524f2920msh0aa8a3bf3b6104bp1e263cjsn108b54a2b41f';
// httpClient.defaults.headers.common['Access-Control-Allow-Credentials'] = true;
// httpClient.defaults.headers.common['Access-Control-Allow-Headers'] = 'ver';
// httpClient.defaults.headers.post['Content-Type'] = 'application/json';
// httpClient.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest';
// httpClient.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
// httpClient.defaults.headers.post['Access-Control-Allow-Methods'] = 'GET, POST';




      // if (!config.headers.Authorization) {
      //   const token = JSON.parse(localStorage.getItem("keyCloak")).token;


  // httpClient.interceptors.response.use(response => {
  // Edit response config
  // return response;
// }, error => {
//   const notyf = new Notyf()

//   if (!error.response) {
//     notyf.error("No internet connection!")
//   }

//   if (parseInt(error.response?.status) === 422) {
//     notyf.error(error.response.data.message)
//   }

//   if (parseInt(error.response?.status) === 401) {
//     notyf.error(error.response.data.message)
//   }

//   if (parseInt(error.response?.status) === 403) {
//     notyf.error(error.response.data.message)
//   }

//   if (parseInt(error.response?.status) === 413) {
//     notyf.error(error.response.data.message)
//   }
//   return Promise.reject(error);
// });

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