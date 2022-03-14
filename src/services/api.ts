import axios from "axios";

const api = axios.create({
  baseURL: "https://chronos.compraqui.app",
});

export default api;
