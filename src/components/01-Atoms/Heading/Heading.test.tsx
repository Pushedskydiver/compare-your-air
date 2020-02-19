import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { Heading1, Heading2 } from './Heading.styles';

afterEach(() => {
  cleanup();
});

describe('<Headings />', () => {
  it('should render a h1 tag', () => {
    const { container } = render(
      <Heading1>This is a h1 tag</Heading1>
    );

    expect(container).toMatchSnapshot();
  });

  it('should render a h2 tag', () => {
    const { container } = render(
      <Heading2>This is a h2 tag</Heading2>
    );

    expect(container).toMatchSnapshot();
  });
})