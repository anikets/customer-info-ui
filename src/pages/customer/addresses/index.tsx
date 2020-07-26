import React, { useEffect } from 'react';
import { getAddresses } from '../../../data-store/addresses/address-actions';
import { useRouteMatch, useHistory } from 'react-router-dom';
import { AppState } from '../../../model';
import { useSelector, useDispatch } from 'react-redux';

const Addresses = () => {
  const { addresses } = useSelector((state: AppState) => state.address);
  const dispatch = useDispatch();
  const history = useHistory();
  const match = useRouteMatch();
  const params: any = match.params;
  useEffect(() => {
    dispatch(getAddresses(params.id));
  }, []);

  return (
    <>
      {/* todo show loading animation while XHR is in progress */}
      {/* todo show error message if XHR fails */}
      <button onClick={() => history.goBack()}>Back</button>
      <h2>Addresses</h2>
      <p>{JSON.stringify(addresses || '')}</p>
    </>
  );
};

export default Addresses;
