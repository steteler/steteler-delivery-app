import axios from 'axios';

export default async function getProducts(req) {
  const headers = {
    'Access-Control-Allow-Origin': true,
    'Access-Control-Allow-Credentials': true,
  };
  const { data } = await axios({
    method: 'get',
    url: 'http://localhost:3001/customer/products',
    data: req,
    headers,
  });
  return { data };
}
