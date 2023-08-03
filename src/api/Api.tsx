import axios from "axios";
import JwtService from "./JwtService";
// import api from "./ManageApi";
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate()

let baseRequest: any;

baseRequest = axios.create({
  baseURL: 'http://5.75.227.33:8080/',
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "_lang": "en",
    "_costumer": 1
  },
});

baseRequest.interceptors.request.use(
  function (config) {
    config.headers["Authorization"] = "Bearer " + JwtService.getToken();
    return config;
  },
  function (error) {
    // console.dir(errr)
    console.log(error);
    return Promise.reject(error);
  }
);

// TODO refresh token logic

// baseRequest.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     const refreshToken = JwtService.getRefreshToken();

//     if (error.response.status !== 401) {
//       return new Promise((resolve, reject) => {
//         reject(error);
//       });
//     }

//     if (error.config.url.includes("/refresh")) {
//       return Promise.reject(error);
//     }

//     if (error.response.status === 401) {
//       navigate('/login')
//     }

//     return api
//       .getNewApiToken({ refresh_token: refreshToken })
//       .then((response) => {
//         JwtService.setToken(response.access_token);
//         JwtService.setRefreshToken(response.refresh_token);
//         JwtService.setAxiosToken();
//         error.config.headers["Authorization"] =
//           "Bearer " + response.access_token;

//         return baseRequest.request(error.config);
//       })
//       .catch((err) => {
//         JwtService.unsetToken();
//         JwtService.unsetRefreshToken();
//         return Promise.reject(error.response.status);
//       });
//   }
// );

export { baseRequest, axios };
