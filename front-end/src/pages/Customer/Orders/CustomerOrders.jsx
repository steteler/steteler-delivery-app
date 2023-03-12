import React from 'react';
import { useQuery } from 'react-query';
import useLocalStorage from '../../../hooks/useLocalStorage';
import getUserSales from '../../../api/getUserSales';
import CustomerOrderCard from '../../../components/Customer/CustomerOrderCard';

export default function CustomerOrders() {
  const [storedValue] = useLocalStorage('user');
  const {
    isSuccess,
    data: userOrders,
  } = useQuery('userSales', () => getUserSales(storedValue.id));

  return (
    <div>
      <h1>Customer Orders</h1>
      <section>
        { isSuccess && userOrders.map((it, i) => (
          <CustomerOrderCard key={ i } order={ it } />
        ))}
      </section>
    </div>
  );
}
