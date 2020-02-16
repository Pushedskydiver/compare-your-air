import styled from 'styled-components';
import { colors } from '../../../styles/colors.styles';
import { typography } from '../../../styles/typography.styles';
import spacing from '../../../styles/spacing.styles';

const InputStyles = styled.input`
  position: relative;
  width: 100%;
  padding-top: ${spacing.padding}px;
  padding-right: ${spacing.padding / 2}px;
  padding-bottom: ${spacing.padding}px;
  padding-left: ${spacing.padding * 4}px;
  border: 2px solid ${colors.neutral};
  border-radius: 8px;
  color: ${colors.dark};
  font-size: ${typography.body.size.regular};
  appearance: none;
  z-index: 2;
`;

export default InputStyles;
