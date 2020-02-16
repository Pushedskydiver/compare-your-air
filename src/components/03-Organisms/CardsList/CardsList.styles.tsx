import styled from 'styled-components';
import spacing from '../../../styles/spacing.styles';

const CardsListStyles = styled.ul`
  display: grid;
  grid-gap: ${spacing.core * 1.5}px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  margin-top: calc(12em + 20px);
  margin-bottom: ${spacing.margin * 4}px;
  padding-left: 0;
  list-style: none;
`;

export default CardsListStyles;
