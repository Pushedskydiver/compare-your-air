import React from 'react';
import { cleanup, render } from '@testing-library/react';
import SkipLink from './SkipLink.styles';

afterEach(() => {
  cleanup();
});

describe('<SkipLink />', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <SkipLink href="#main">This is a skip link</SkipLink>
    );

    expect(container).toMatchSnapshot();
  });
})