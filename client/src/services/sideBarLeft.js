import axios from "axios";
// let url = "http://localhost:8000";
let url = "http://test.gractor.com:50080";
// let url = "http://ec2-52-79-217-69.ap-northeast-2.compute.amazonaws.com";
export async function getSideBarLeft() {
  const res = await axios.get(`${url}/api/sideBarLeft`, { withCredentials: true });
  return res;
}
