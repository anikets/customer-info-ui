import React, { useEffect } from 'react';
import { getAddresses } from '../../../data-store/addresses/address-actions';
import { useRouteMatch } from 'react-router-dom';

const Addresses = () => {
  const match = useRouteMatch();
  useEffect(() => {
    console.info('match', match);
    // todo
    // dispatch(getAddresses(match.params.id));
  });

  return (
    <>
      <h2>Addresses</h2>
    </>
  );
};

export default Addresses;
