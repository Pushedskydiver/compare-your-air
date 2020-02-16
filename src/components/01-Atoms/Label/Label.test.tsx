import React from 'react';
import { cleanup, render } from '@testing-library/react';
import Label from './Label.styles';

afterEach(() => {
  cleanup();
});

describe('<Label />', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <Label>This is a label</Label>
    );

    expect(container).toMatchSnapshot();
  });
})