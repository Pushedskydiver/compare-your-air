import React from 'react';
import { cleanup, render } from '@testing-library/react';
import Status from './Status';

afterEach(() => {
  cleanup();
});

describe('<Status />', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <Status />
    );

    expect(container).toMatchSnapshot();
  });
})