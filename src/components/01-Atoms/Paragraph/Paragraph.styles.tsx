import styled, { css } from 'styled-components';
import { typography } from '../../../styles/typography.styles';
import spacing from '../../../styles/spacing.styles';

interface ParagraphProps {
  noMargin?: boolean,
  small?: boolean,
  medium?: boolean,
  bold?: boolean,
  uppercase?: boolean,
  align?: string,
}

const Paragraph = styled.p<ParagraphProps>`
  font-family: var(--font);
  line-height: ${typography.lineHeight.body};

  &:last-of-type {
    margin-bottom: 0;
  }

  ${props => !props.noMargin && css`
    margin: 0 0 ${(spacing.margin * 1.5)}px 0;
  `}

  ${props => props.small && css`
    font-size: ${typography.body.size.small};
  `}

  ${props => props.medium && css`
    font-size: ${typography.body.size.medium};
  `}

  ${props => props.bold && css`
    font-weight: ${typography.weight.medium};
  `}

  ${props => props.uppercase && css`
    text-transform: uppercase;
  `}

  ${props => props.align && css`
    text-align: ${props.align};
  `}
`;

export default Paragraph;
