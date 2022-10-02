import axios from "axios";

export async function getNavBar() {
  const res = await axios.get("http://localhost:8000/api/navBar", { withCredentials: true });
  return res;
}
