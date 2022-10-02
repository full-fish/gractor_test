import axios from "axios";
// let url = "http://localhost:8000";
// let url = "http://ec2-3-38-151-42.ap-northeast-2.compute.amazonaws.com:8000";
let url = "http://ec2-13-209-14-109.ap-northeast-2.compute.amazonaws.com:8000";
export async function getNavBar() {
  const res = await axios.get(`${url}/api/navBar`, { withCredentials: true });
  return res;
}
