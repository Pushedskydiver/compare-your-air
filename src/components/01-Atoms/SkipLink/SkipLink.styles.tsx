import styled, { css } from 'styled-components';
import { typography } from '../../../styles/typography.styles';
import { minWidth, maxWidth } from '../../../styles/breakpoints.styles';
import spacing from '../../../styles/spacing.styles';

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

  ${maxWidth(768, () => css`
    width: 100%;
    margin-right: -5vw;
    margin-left: -5vw;
    padding-top: ${spacing.padding}px;
    padding-bottom: ${spacing.padding}px;
    background-color: var(--foreground-dark);
    color: var(--foreground-light);
    text-align: center;
  `)}

  ${minWidth(768, () => css`
    top: 50%;
    right: 0;
    width: auto;
    transform: translateY(-50%);
  `)}
`;

export default SkipLink;
