import axios from "axios";

const API = axios.create({
  baseURL: "https://house-rent-lt8a.onrender.com",
});

export default API;
