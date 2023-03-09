import axios from 'axios';

export default async function postAdminRegister({ register, token }) {
  console.log('🚀 ~ file: postAdminRegister.js:4 ~ postAdminRegister ~ token:', token);
  console.log('🚀 ~ file: postAdminRegister.js:4 ~ postAdminRegister ~ data:', register);
  const headers = {
    'Access-Control-Allow-Origin': true,
    'Access-Control-Allow-Credentials': true,
    Authorization: token,
  };
  const { data } = await axios({
    method: 'post',
    url: 'http://localhost:3001/register/admin',
    data: register,
    headers,
  });
  return { data };
}
