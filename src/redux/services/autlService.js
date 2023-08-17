import { METHODS, SERVICE_ROUTE } from "../constant/serviceConstant";
import Axios from "axios";
export function AuthService(data) {
  return new Promise((resolve, reject) => {
    let config = {
      url: SERVICE_ROUTE.LOGIN,
      data,
      methods: METHODS.GET,
    };
    Axios.request(config)
      .then((response) => {
        return resolve(response);
      })
      .catch((error) => {
        return reject(error);
      });
  });
}
