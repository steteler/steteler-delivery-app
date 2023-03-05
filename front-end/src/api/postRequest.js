import axios from 'axios';

export default async function postRequest(endpoint, req) {
  const headers = {
    'Access-Control-Allow-Origin': true,
    'Access-Control-Allow-Credentials': true,
  };
  const { status, data } = await axios({
    method: 'post',
    url: `http://localhost:3001${endpoint}`,
    data: req,
    headers,
  });
  return { status, data };
}
