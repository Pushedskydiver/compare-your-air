import React from 'react';
import { cleanup, render } from '@testing-library/react';
import Paragraph from './Paragraph.styles';

afterEach(() => {
  cleanup();
});

describe('<Paragraph />', () => {
  it('should match default paragraph snapshot', () => {
    const { container } = render(
      <Paragraph>This is a p tag</Paragraph>
    );

    expect(container).toMatchSnapshot();
  });

  it('should match snapshot of paragraph with no margin', () => {
    const { container } = render(
      <Paragraph noMargin>This is a p tag</Paragraph>
    );

    expect(container).toMatchSnapshot();
  });
})