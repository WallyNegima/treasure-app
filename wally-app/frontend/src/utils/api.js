import axios from "axios";
export const URL = "http://localhost:1991";
//FIXME: ヘッダーとか色々必要になったら魔改造する
const api = axios.create({
  baseURL: URL
});

export default api;
