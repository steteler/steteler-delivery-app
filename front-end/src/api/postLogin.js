import axios from 'axios';

export default async function postLogin(req) {
  const headers = {
    'Access-Control-Allow-Origin': true,
    'Access-Control-Allow-Credentials': true,
  };
  const { data } = await axios({
    method: 'post',
    url: 'http://localhost:3001/login',
    data: req,
    headers,
  });
  return { data };
}
