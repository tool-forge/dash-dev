import { auth } from '@/auth';
import axios from 'axios';

const fetchGit = axios.create({
  baseURL: 'https://api.github.com/',
  headers: {
    Accept: 'application/vnd.github+json',
  },
});

fetchGit.interceptors.request.use(
  async (config) => {
    const session = await auth();
    if (session && session.token) {
      config.headers.Authorization = `Bearer ${session.token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default fetchGit;
