import React, { useEffect } from 'react';
import { fetchAddresses } from '../../../data-store/addresses/address-actions';
import { useRouteMatch, Link } from 'react-router-dom';
import { AppState, Routes } from '../../../model';
import { useSelector, useDispatch } from 'react-redux';

const Addresses = () => {
  const { addresses, error } = useSelector((state: AppState) => state.address);
  const dispatch = useDispatch();
  const match = useRouteMatch();
  const params: any = match.params;
  useEffect(() => {
    dispatch(fetchAddresses(params.id));
  }, []);

  return (
    <>
      {/* todo show loading animation while XHR is in progress */}
      <Link to={Routes.CUSTOMERS}>Back</Link>
      <h2>Addresses</h2>
      {error &&
        <p>{error}</p>}
      {!error &&
        <p>{JSON.stringify(addresses || '')}</p>}
    </>
  );
};

export default Addresses;
