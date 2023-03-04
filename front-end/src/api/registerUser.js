import axios from 'axios';

export default async function registerUser(user) {
  const { data } = await axios.post('http://localhost:3001/register', user);
  return data;
}
