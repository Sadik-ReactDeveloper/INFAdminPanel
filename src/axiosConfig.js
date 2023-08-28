import axios from "axios";

const instance = axios.create({
  baseURL: "http://43.205.127.63:5000/",
});

export default instance;
