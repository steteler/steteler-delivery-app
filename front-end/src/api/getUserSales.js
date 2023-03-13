import axios from 'axios';

export default async function getUserSales(id) {
  const { data } = await axios.get(`http://localhost:3001/customer/allOrders/${id}`);
  return data;
}
