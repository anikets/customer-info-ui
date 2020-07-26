import React, { useEffect, Fragment } from 'react';
import { fetchCustomers } from '../../data-store/customers/customer-actions';
import { AppState, Customer, Routes } from '../../model';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { CircularProgress, Typography, Button, Table, TableHead, TableRow, TableCell } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

const Customers = () => {
  const { customers, error, loading } = useSelector((state: AppState) => state.customer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCustomers());
  }, []);

  return (
    <Fragment>
      {loading &&
        <CircularProgress className="loader" />}
      {!loading &&
        <Typography variant="h1">Customers</Typography>}
      {error &&
        <Alert severity="error">{error}</Alert>}
      {!error && !loading &&
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell align="right">Addresses</TableCell>
            </TableRow>
          </TableHead>
          <tbody>
            {customers.map((customer: Customer) =>
              <TableRow key={customer.ID}>
                <TableCell>
                  {customer.ID}
                </TableCell>
                <TableCell>
                  {customer.Name}
                </TableCell>
                <TableCell align="right">
                  <Button component={Link}
                    color="primary"
                    to={Routes.ADDRESSES.replace(':id', customer.ID)}>
                    View
                  </Button>
                </TableCell>
              </TableRow>)}
          </tbody>
        </Table>}
    </Fragment>
  );
};

export default Customers;
