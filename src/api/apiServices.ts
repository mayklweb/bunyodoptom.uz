import Axios from "./api";

export const getProducts = async () => {
  const res = await Axios.get("/products");
  return res.data;
};

export const getCategories = async () => {
  const { data } = await Axios.get("/categories");
  return data;
};

export const logIn = async () => {
  const { data } = await Axios.get("/users/login");
  return data;
};

export const getAddress = async () => {
  const { data } = await Axios.get("/addresses");
  return data;
};

export const getOrders = async () => {
  const { data } = await Axios.get("/users/login");
  return data;
};

export const postOrders = async () => {
  const { data } = await Axios.get("/users/login");
  return data;
};

export const signUp = async () => {
  const { data } = await Axios.get("/users/signup");
  return data;
};

export const getUser = async () => {
  const { data } = await Axios.get("/users/me");
  return data;
};

