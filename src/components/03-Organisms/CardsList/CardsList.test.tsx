import React from 'react';
import { cleanup, render } from '@testing-library/react';
import CardsList from './CardsList';

afterEach(() => {
  cleanup();
});

describe('<CardsList />', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <CardsList />
    );
    expect(container).toMatchSnapshot();
  })
})