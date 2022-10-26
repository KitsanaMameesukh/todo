import axios from "axios";

const inst_axios = axios.create({
  baseURL: "http://127.0.0.1:8000/",
  timeout: 5000,
  headers: {
    Authorization: localStorage.getItem("access_token")
      ? "JWT " + localStorage.getItem("access_token")
      : "{}",
    "Content-Type": "application/json",
    accept: "application/json",
  },
});
inst_axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    if (typeof error.response === "undefined") {
      alert("Error : CORS");
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);
export default inst_axios;
