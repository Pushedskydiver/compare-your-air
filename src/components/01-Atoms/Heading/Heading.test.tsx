import React from 'react';
import { cleanup, render } from '@testing-library/react';;
import { Heading1 } from './Heading.styles';

afterEach(() => {
  cleanup();
});

describe('<HeadingStyles />', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <Heading1>This is a h1 tag</Heading1>
    );

    expect(container).toMatchSnapshot();
  })
})