import axios from "axios";

const ApiConfig = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

// ApiConfig.interceptors.request.use((req) => {
//   if (localStorage.getItem("token") || sessionStorage.getItem("token")) {
//     req.headers.Authorization = `authtoken ${
//       localStorage.getItem("token") || sessionStorage.getItem("token")
//     }`;
//   }
//   return req;
// });

export default ApiConfig;
