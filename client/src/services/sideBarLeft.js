import axios from "axios";
// let url = "http://localhost:8000";
let url = "http://gractor.s3-website.ap-northeast-2.amazonaws.com/";
export async function getSideBarLeft() {
  const res = await axios.get(`${url}/api/sideBarLeft`, { withCredentials: true });
  return res;
}
