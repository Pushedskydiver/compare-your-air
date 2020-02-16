import React from 'react';
import { cleanup, render } from '@testing-library/react';
import List from './List';

afterEach(() => {
  cleanup();
});

describe('<List />', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <List />
    );
    expect(container).toMatchSnapshot();
  })
})