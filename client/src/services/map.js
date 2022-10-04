import axios from "axios";
// let url = "http://localhost";
let url = "http://test.gractor.com:50080";
// let url = "http://ec2-52-79-217-69.ap-northeast-2.compute.amazonaws.com";
export async function getMap() {
  const res = await axios.get(`${url}/api/map`, { withCredentials: true });
  return res;
}
