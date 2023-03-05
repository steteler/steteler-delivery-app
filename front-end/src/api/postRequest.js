import axios from 'axios';

export default async function postRequest(endpoint, req) {
  const { data } = await axios.post(`http://localhost:3001${endpoint}`, req);
  return data;
}
