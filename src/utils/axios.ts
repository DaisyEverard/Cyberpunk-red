import axios from 'axios';

const BASE_URL = 'http://localhost:5087/';

export const axiosBaseClient = axios.create({
  baseURL: BASE_URL,
});
