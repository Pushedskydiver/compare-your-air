import React, { useContext } from 'react';
import StatusStyles from './Status.styles';
import Context from '../../Context';

const Status = () => {
  const { searchResults } = useContext(Context);
  const resultsLength = searchResults.length;

  return (
    <StatusStyles aria-live="polite" role="status">{resultsLength} results available.</StatusStyles>
  )
}

export default Status;
