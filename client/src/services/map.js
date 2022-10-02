import axios from "axios";

export async function getMap() {
  const res = await axios.get("http://localhost:8000/api/map", { withCredentials: true });
  return res;
}
