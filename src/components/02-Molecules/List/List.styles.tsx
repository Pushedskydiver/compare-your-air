import styled from 'styled-components';
import { colors } from '../../../styles/colors.styles';
import { typography } from '../../../styles/typography.styles';
import spacing from '../../../styles/spacing.styles';

const ListStyles = styled.datalist`
  position: absolute;
  top: calc(100% - ${spacing.core}px);
  left: 0;
  width: 100%;
  max-height: 12em;
  margin: 0;
  padding-top: ${spacing.padding}px;
  padding-left: 0;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 6px;
  background-color: ${colors.light};
  list-style: none;
  overflow-y: scroll;

  &:empty {
    padding-top: 0;
  }

  li {
    padding: ${spacing.padding}px;
    color: ${colors.dark};
    font-size: ${typography.body.size.regular};
    transition: background-color 0.3s ease-in-out;
    cursor: pointer;

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  }

  li[aria-selected="true"],
  li:hover {
    background-color: ${colors.pale};
  }
`;

export default ListStyles;
