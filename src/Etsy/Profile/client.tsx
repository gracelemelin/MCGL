import axios from "axios";

const axiosWithCredentials = axios.create({
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// app.post("/api/users/register", register);
export const register = async (user: any) => {
  const response = await axiosWithCredentials.post(
    "http://localhost:4000/api/users/register",
    user
  );
  return response.data;
};

//   app.post("/api/users/login", login);
export const login = async (user: any) => {
  const response = await axiosWithCredentials.post(
    "http://localhost:4000/api/users/login",
    user
  );
  return response.data;
};
//   app.post("/api/users/logout", logout);
export const logout = async () => {
  const response = await axiosWithCredentials.post(
    "http://localhost:4000/api/users/logout"
  );
  return response.data;
};
//   app.get("/api/users/profile", profile);
export const profile = async () => {
  const response = await axiosWithCredentials.get(
    "http://localhost:4000/api/users/profile"
  );
  return response.data;
};

export const update = async (newUsername : any, newEmail : any) => {
  const body = JSON.stringify({
    username: newUsername,
    email: newEmail,
  })
  const response = await axiosWithCredentials.put(
    "http://localhost:4000/api/users/profile", body
  );
  return response.data;
};

export const profileother = async (userId : any) => {
  console.log(String(userId))
  const response = await axiosWithCredentials.get(
    `http://localhost:4000/api/users/profile/${userId}`
  );
  return response.data;
};