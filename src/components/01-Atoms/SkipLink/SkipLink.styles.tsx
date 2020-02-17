import styled from 'styled-components';
import { typography } from '../../../styles/typography.styles';

const SkipLink = styled.a`
  position: absolute;
  top: 0;
  font-weight: ${typography.weight.medium};
  line-height: normal;
  overflow: hidden;
  clip: rect(0 0 0 0);

  &:active,
  &:focus {
    clip: auto;
    overflow: visible;
    z-index: 100;
  }
`;

export default SkipLink;
