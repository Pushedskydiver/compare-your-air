import React from 'react';
import { cleanup, render } from '@testing-library/react';;
import InputFieldStyles from './InputField.styles';

afterEach(() => {
  cleanup();
});

describe('<InputfieldStyles />', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <InputFieldStyles>
        Some content goes here.
      </InputFieldStyles>
    );
    expect(container).toMatchSnapshot();
  })
})