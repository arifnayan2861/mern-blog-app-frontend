import axios from "axios";

const signup = async ({ name, email, password }) => {
  try {
    const { data } = await axios.post("/api/users/register", {
      name,
      email,
      password,
    });
    return data;
  } catch (error) {
    if (error.response && error.response.data.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error(error.message);
  }
};

const login = async ({ email, password }) => {
  try {
    const { data } = await axios.post("/api/users/login", {
      email,
      password,
    });
    return data;
  } catch (error) {
    if (error.response && error.response.data.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error(error.message);
  }
};

const getUserProfile = async ({ token }) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.get("/api/users/profile", config);
    return data;
  } catch (error) {
    if (error.response && error.response.data.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error(error.message);
  }
};

export { signup, login, getUserProfile };
