import React, { useContext } from 'react';
import CardStyles from './Card.styles';
import Button from '../../01-Atoms/Button/Button.styles';
import { Close } from '../../01-Atoms/Icon/Icon';
import { Heading2 } from '../../01-Atoms/Heading/Heading.styles';
import Paragraph from '../../01-Atoms/Paragraph/Paragraph.styles'
import { colors } from '../../../styles/colors.styles';
import { calcLastUpdated, formatDate } from '../../Utils/Utils';
import Context from '../../Context';

type PropsForCard = {
  location: string;
  city: string;
  measurements: Array<any>;
};

type PropsForValues = {
  parameter: string;
  value: string;
};

type PropsForLastUpdated = {
  lastUpdated: string;
}

function renderValues(measurement: PropsForValues) {
  const parameter = measurement.parameter;
  const value = measurement.value;

  return `${parameter}: ${value}`;
}

function renderLastUpdated(measurement: PropsForLastUpdated) {
  const todaysDate = new Date();
  const previousDate = new Date(measurement.lastUpdated);
  const lastUpdated: any = calcLastUpdated(todaysDate, previousDate);
  const filteredDate = Object.keys(lastUpdated)
    .filter(key => lastUpdated[key] > 0)
    .map(key => formatDate(key, lastUpdated[key]));
  
  return filteredDate[0];
}

const Card = (props: PropsForCard) => {
  const { removeSelectedLocation } = useContext(Context);
  const { location, city, measurements } = props;
  const values = measurements.map(renderValues).join(', ');
  const lastUpdated = renderLastUpdated(measurements[0]);

  function handleCardRemoval(event: any) {
    const location = event.target.getAttribute('data-location');

    removeSelectedLocation(location);
  }
  
  return (
    <CardStyles>
      <Button
        aria-label={`Remove ${location} from the selected locations list.`}
        data-location={location}
        onClick={handleCardRemoval}
      >
        <Close/>
      </Button>

      <Paragraph bold noMargin small uppercase>Updated {lastUpdated}</Paragraph>
      <Heading2 color={colors.core.alpha} medium>{location}</Heading2>

      <Paragraph medium>In {city}, United Kingdom</Paragraph>
      <Paragraph bold uppercase><strong>Values: {values}</strong></Paragraph>
    </CardStyles>
  );
}

export default Card;
