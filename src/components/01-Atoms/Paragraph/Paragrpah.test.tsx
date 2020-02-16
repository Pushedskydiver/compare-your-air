import React from 'react';
import { cleanup, render } from '@testing-library/react';
import Paragraph from './Paragraph.styles';

afterEach(() => {
  cleanup();
});

describe('<Paragraph />', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <Paragraph>This is a p tag</Paragraph>
    );

    expect(container).toMatchSnapshot();
  });
})