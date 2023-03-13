import axios from 'axios';

export default async function postSeller(req, token) {
  const headers = {
    'Access-Control-Allow-Origin': true,
    'Access-Control-Allow-Credentials': true,
    Authorization: token,
  };
  const { data } = await axios({
    method: 'post',
    url: 'http://localhost:3001/customer/allOrders',
    data: req,
    headers,
  });
  return { data };
}
