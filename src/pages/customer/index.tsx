import React, { useEffect } from 'react';
import { getCustomers } from '../../data-store/customers/customer-actions';
import { AppState, Customer, Routes } from '../../model';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const Customers = () => {
  const { customer } = useSelector((state: AppState) => state);
  const { customers } = customer;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCustomers());
  }, []);

  return (
    <>
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
