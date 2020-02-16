import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { Close, Search } from './Icon';

afterEach(() => {
  cleanup();
});

describe('<Icons />', () => {
  it('should match close icon snapshot', () => {
    const { container } = render(
      <Close />
    );

    expect(container).toMatchSnapshot();
  });

  it('should match search icon snapshot', () => {
    const { container } = render(
      <Search />
    );

    expect(container).toMatchSnapshot();
  });
})
