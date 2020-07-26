import React, { useEffect } from 'react';
import { getCustomers } from '../../data-store/customers/customer-actions';
import { AppState, CustomerState, Customer, Routes } from '../../model';
import { Link, useRouteMatch } from 'react-router-dom';
import { connect } from 'react-redux';

const Customers = (props: { getCustomers: Function, customerInfo: CustomerState }) => {
  useEffect(() => {
    props.getCustomers();
  }, []);

  return (
    <>
      <h2>Customers</h2>
      <ul>
        {props.customerInfo?.customers.map((customer: Customer) =>
          <li key={customer.id}>
            {customer.name}
            <Link to={Routes.ADDRESSES.replace(':id', customer.id)}>View Addresses</Link>
          </li>)}
      </ul>
    </>
  );
};

const mapStateToProps = (state: AppState) => {
  return {
    customerInfo: state.customer,
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    getCustomers: () => {
      dispatch(getCustomers());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Customers);
