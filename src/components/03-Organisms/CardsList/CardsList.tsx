import React, { useContext } from 'react';
import CardsListStyles from './CardsList.styles';
import Card from '../../02-Molecules/Card/Card';
import Context from '../../Context';

type PropsForLocation = {
  location: string;
  city: string;
  measurements: Array<any>;
};

const CardsList = () => {
  const { selectedLocations } = useContext(Context);

  function renderLocation(data: PropsForLocation, index: number) {
    const { location, city, measurements } = data;

    if (selectedLocations.length > 0) {
      return (
        <Card
          key={index}
          location={location}
          city={city}
          measurements={measurements}
        />
      )
    }

    return '';
    
  }

  return (
    <CardsListStyles data-testid="locations-list">
      {selectedLocations.map(renderLocation)}
    </CardsListStyles>
  );
}

export default CardsList;
