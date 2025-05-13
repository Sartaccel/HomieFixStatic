import axios from "axios";

const api = axios.create({
    // baseURL: "https://homiefix.in/api",
    baseURL: "http://localhost:1212/",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  });

  export default api;