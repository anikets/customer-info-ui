import React, { useEffect } from 'react';
import { fetchCustomers } from '../../data-store/customers/customer-actions';
import { AppState, Customer, Routes } from '../../model';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const Customers = () => {
  const { customers } = useSelector((state: AppState) => state.customer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCustomers());
  }, []);

  return (
    <>
      {/* todo show loading animation while XHR is in progress */}
      {/* todo show error message if XHR fails */}
      <h2>Customers</h2>
      <ul>
        {customers.map((customer: Customer) =>
          <li key={customer.ID}>
            {customer.Name}
            <Link to={Routes.ADDRESSES.replace(':id', customer.ID)}>View Addresses</Link>
          </li>)}
      </ul>
    </>
  );
};

export default Customers;
