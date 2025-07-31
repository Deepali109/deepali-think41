import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";

export const fetchProducts = (page = 1, limit = 12) =>
  axios.get(`${API_BASE_URL}/products?page=${page}&limit=${limit}`);

export const fetchProductById = (id) =>
  axios.get(`${API_BASE_URL}/products/${id}`);
