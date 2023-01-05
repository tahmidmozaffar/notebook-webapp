import axios from "axios";
import { json } from "stream/consumers";

const signup = async (name: string, username: string, password: string, email: string) => {

  const response = await axios.post("/api/auth/signup", {
    params: {
      name,
      username,
      password,
      email
    }
  });

  return response.data;
}

const login = async (username: string, password: string) => {

  const response = await axios.post("/api/auth/login", {
    username,
    password
  });

  return response.data;
}

const authService = {
  signup,
  login
}

export default authService;
