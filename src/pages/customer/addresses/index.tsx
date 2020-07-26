import React, { useEffect, Fragment } from 'react';
import { fetchAddresses } from '../../../data-store/addresses/address-actions';
import { useRouteMatch, Link } from 'react-router-dom';
import { AppState, Routes, Address } from '../../../model';
import { useSelector, useDispatch } from 'react-redux';
import { Button, CircularProgress, Typography, Table, TableHead, TableRow, TableCell, TableBody, Grid } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

const Addresses = () => {
  const { addresses, error, loading } = useSelector((state: AppState) => state.address);
  const dispatch = useDispatch();
  const match = useRouteMatch();
  const params: any = match.params;
  useEffect(() => {
    dispatch(fetchAddresses(params.id));
  }, []);

  return (
    <Fragment>
      {loading &&
        <CircularProgress className="loader" />}
      {!loading &&
        <Grid container>
          <Grid item sm={8}>
            <Typography variant="h1">Addresses</Typography>
          </Grid>
          <Grid item sm={4}
            style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <Button component={Link}
              color="secondary"
              to={Routes.CUSTOMERS}>
              Back
            </Button>
          </Grid>
        </Grid>}
      {error &&
        <Alert severity="error">{error}</Alert>}
      {!error && !loading &&
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Line 1</TableCell>
              <TableCell>Line 2</TableCell>
              <TableCell>City</TableCell>
              <TableCell>State</TableCell>
              <TableCell>Country</TableCell>
              <TableCell>ZIP</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {addresses.map((address: Address) =>
              <TableRow key={address.ID}>
                <TableCell>{address.ID}</TableCell>
                <TableCell>{address.line1}</TableCell>
                <TableCell>{address.line2}</TableCell>
                <TableCell>{address.city}</TableCell>
                <TableCell>{address.state}</TableCell>
                <TableCell>{address.country}</TableCell>
                <TableCell>{address.pin}</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>}
    </Fragment>
  );
};

export default Addresses;
