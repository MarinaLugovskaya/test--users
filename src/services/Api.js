import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/users';

export async function fetchUsers() {
  const res = await axios.get(`/`);
  return await res.data;
}

export async function fetchUserById(userId) {
  const res = await axios.get(
    `/${userId}?&language=en-US`,
  );
  return res.data;
}