import axios from 'axios';

export default async function getUser(req) {
  const headers = {
    'Access-Control-Allow-Origin': true,
    'Access-Control-Allow-Credentials': true,
  };
  const { data } = await axios({
    method: 'get',
    url: 'http://localhost:3001/user',
    data: req,
    headers,
  });
  return { data };
}
