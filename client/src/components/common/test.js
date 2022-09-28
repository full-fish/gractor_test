async function getIpClient() {
  try {
    const response = await axios.get("https://ipinfo.io/json");
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

getIpClient();
