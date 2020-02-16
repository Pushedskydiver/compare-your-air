import styled, { css } from 'styled-components';
import { colors } from '../../../styles/colors.styles';
import spacing from '../../../styles/spacing.styles';

interface IconProps {
  search?: boolean,
  close?: boolean
}

const IconStyles = styled.svg<IconProps>`
  display: inline-block;
  vertical-align: middle;
  pointer-events: none;

  ${props => props.close && css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: ${spacing.padding / 1.5}px;
    fill: ${colors.dark};
  `}

  ${props => props.search && css`
    position: absolute;
    top: 50%;
    left: 0;
    width: 48px;
    height: 48px;
    padding: 8px;
    fill: ${colors.neutral};
    transform: translateY(-50%);
    z-index: 3;
  `}
`;

export default IconStyles;
