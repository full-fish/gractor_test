import axios from "axios";

export async function getSideBarLeft() {
  const res = await axios.get("http://localhost:8000/api/sideBarLeft", { withCredentials: true });
  return res;
}
