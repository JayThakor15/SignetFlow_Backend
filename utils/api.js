import axios from "axios";

const API = axios.create({
  baseURL: "https://signetflow-backend.onrender.com/api", // change if deployed
});

export default API;
