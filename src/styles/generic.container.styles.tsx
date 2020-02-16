import styled from 'styled-components';
import spacing from './spacing.styles';

export const Wrapper = styled.section`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Container = styled(Wrapper)`
  padding-top:  ${spacing.padding * 4}px;
  padding-right:  ${spacing.padding * 2}px;
  padding-left: ${spacing.padding * 2}px;
`;
