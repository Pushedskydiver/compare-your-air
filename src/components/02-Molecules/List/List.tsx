import React, { useContext } from 'react';
import ListStyles from './List.styles';
import Context from '../../Context';

type SearchResultsProps = {
  name: string
};

const List = () => {
  const { searchResults } = useContext(Context);

  function renderCity(location: SearchResultsProps, index: number) {    
    return (
      <option
        key={index}
        value={location.name}
      />
    );
  }

  return (
    <ListStyles
      data-testid="location-results"
      id="results"
    >
      {searchResults.map(renderCity)}
    </ListStyles>
  )
}

export default List;
