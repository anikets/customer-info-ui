import React, { useEffect } from 'react';
import { getAddresses } from '../../../data-store/addresses/address-actions';
import { useRouteMatch } from 'react-router-dom';
import { AppState, AddressState } from '../../../model';
import { connect } from 'react-redux';

const Addresses = (props: { getAddresses: Function, addressInfo?: AddressState }) => {
  const match = useRouteMatch();
  const params: any = match.params;
  useEffect(() => {
    props.getAddresses(params.id);
  }, []);

  return (
    <>
      <h2>Addresses</h2>
    </>
  );
};

const mapStateToProps = (state: AppState) => {
  return {
    addressInfo: state.address,
  }
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    getAddresses: (customerId: string) => {
      dispatch(getAddresses(customerId));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Addresses);
