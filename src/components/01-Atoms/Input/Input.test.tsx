import React from 'react';
import { cleanup, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input from './Input';

afterEach(() => {
  cleanup();
});

describe('<Input />', () => {
  it('should match snapshot', () => {
    const { container } = render(<Input />);

    expect(container).toMatchSnapshot();
  });

  it('should contain value of "Manchester"', async () => {
    const { getByTestId } = render(<Input />);
    const input = getByTestId('location-input');

    await userEvent.type(input, 'Manchester');
    expect(input).toHaveAttribute('value', 'Manchester');
  })
})