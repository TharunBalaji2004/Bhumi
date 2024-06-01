import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

const getToken = async (setCook) => {
  const accessToken = Cookies.get("access-token");
  const decodedToken = await jwtDecode(accessToken);
  setCook(decodedToken);
};

export default getToken;
