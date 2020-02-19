import React, { useContext } from 'react';
import StatusStyles from './Status.styles';
import Context from '../../Context';

const Status = () => {
  const { selectedLocations } = useContext(Context);
  const locationsLength = selectedLocations.length;

  return (
    <StatusStyles aria-live="polite" role="status">{locationsLength} locations available.</StatusStyles>
  )
}

export default Status;
