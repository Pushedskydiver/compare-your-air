import styled from 'styled-components';
import spacing from '../../../styles/spacing.styles';

const Button = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  padding: ${spacing.padding / 2}px;
  border: 0;
  border-radius: 0;
  background-color: transparent;
  appearance: none;
  z-index: 1;
  cursor: pointer;
`;

export default Button;
