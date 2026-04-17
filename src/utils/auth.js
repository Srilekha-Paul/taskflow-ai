export const saveUser = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const getUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export const loginUser = (email, password) => {
  const user = getUser();

  if (user && user.email === email && user.password === password) {
    localStorage.setItem("token", "demo-jwt-token");
    return true;
  }

  return false;
};

export const isAuthenticated = () => {
  return !!localStorage.getItem("token");
};

export const logout = () => {
  localStorage.removeItem("token");
};