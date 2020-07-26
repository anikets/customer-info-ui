import React, { useEffect } from 'react';
import { getCustomers } from '../../data-store/customers/customer-actions';
import { AppState, Customer, Routes } from '../../model';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const Customers = () => {
  const { customers } = useSelector((state: AppState) => state.customer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCustomers());
  }, []);

  return (
    <>
      {/* todo show loading animation while XHR is in progress */}
      {/* todo show error message if XHR fails */}
      <h2>Customers</h2>
      <ul>
        {customers.map((customer: Customer) =>
          <li key={customer.id}>
            {customer.name}
            <Link to={Routes.ADDRESSES.replace(':id', customer.id)}>View Addresses</Link>
          </li>)}
      </ul>
    </>
  );
};

export default Customers;
