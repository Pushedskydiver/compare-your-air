import styled, { css } from 'styled-components';
import { typography } from '../../../styles/typography.styles';
import spacing from '../../../styles/spacing.styles';

interface HeadingProps {
  color?: string,
  align?: string,
  noMargin?: boolean,
  tiny?: boolean,
  small?: boolean,
  regular?: boolean,
  medium?: boolean,
  big?: boolean,
  large?: boolean,
  xl?: boolean
}

export const Heading1 = styled.h1<HeadingProps>`
  font-family: var(--font);
  font-weight: ${typography.weight.medium};
  line-height: ${typography.lineHeight.heading};

  ${props => props.color && css`
    color: ${props.color};
  `}

  ${props => props.align && css `
    text-align: ${props.align};
  `}

  ${props => !props.noMargin && css`
    margin: 0 0 ${(spacing.margin * 2)}px 0;
  `}

  ${props => props.noMargin && css`
    margin: 0;
  `}

  ${props => props.tiny && css`
    font-size: ${typography.heading.size.tiny};
  `}

  ${props => props.small && css`
    font-size: ${typography.heading.size.small};
  `}

  ${props => props.regular && css`
    font-size: ${typography.heading.size.regular};
  `}

  ${props => props.medium && css`
    font-size: ${typography.heading.size.medium};
  `}

  ${props => props.big && css`
    font-size: ${typography.heading.size.big};
  `}

  ${props => props.large && css`
    font-size: ${typography.heading.size.large};
  `}

  ${props => props.xl && css`
    font-size: ${typography.heading.size.xl};
  `}
`;

export const Heading2 = Heading1.withComponent('h2');
export const Heading3 = Heading1.withComponent('h3');
export const Heading4 = Heading1.withComponent('h4');
export const Heading5 = Heading1.withComponent('h5');
