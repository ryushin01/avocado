import axios from 'axios';

const BASE_URL = '/avocado/data';

export const customAxios = axios.create({
  baseURL: `${BASE_URL}`,
  headers: {
    // access_token: cookies.get('access_token'),
    Authorization: localStorage.getItem('accessToken'),
  },
});
