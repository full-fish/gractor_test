import axios from "axios";
// let url = "http://localhost:8000";
let url = "http://ec2-13-209-14-109.ap-northeast-2.compute.amazonaws.com";
export async function getMap() {
  const res = await axios.get(`${url}/api/map`, { withCredentials: true });
  return res;
}
