import React from 'react';
import { cleanup, render } from '@testing-library/react';;
import ButtonStyles from './Button.styles';

afterEach(() => {
  cleanup();
});

describe('<ButtonStyles />', () => {
  it('should match snapshot', () => {
      const { container } = render(
        <ButtonStyles>This is a button</ButtonStyles>
      );
      
      expect(container).toMatchSnapshot();
  })
})