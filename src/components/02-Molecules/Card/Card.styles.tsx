import styled from 'styled-components';
import { colors } from '../../../styles/colors.styles';
import spacing from '../../../styles/spacing.styles';

const CardStyles = styled.li`
  position: relative;
  padding: ${spacing.padding * 1.75}px;
  border-radius: 8px;
  background-color: ${colors.light};
  color: ${colors.dark};
`;


export default CardStyles;
