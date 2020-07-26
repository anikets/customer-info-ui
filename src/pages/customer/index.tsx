import React, { useEffect } from 'react';
import { getCustomers } from '../../data-store/customers/customer-actions';

const Customers = () => {
  useEffect(() => {
    // todo
    // dispatch(getCustomers());
  }, []);

  return (
    <>
      <h2>Customers</h2>
    </>
  );
};

export default Customers;
