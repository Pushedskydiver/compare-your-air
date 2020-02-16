import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Card from './Card';

const measurements = [
  {
    parameter: 'no2',
    value: 27,
    lastUpdated: '2020-02-15T10:00:00.000Z',
    unit: 'µg/m³',
    sourceName: 'DEFRA',
    averagingPeriod: {
      value: 1,
      unit: 'hours'
    }
  },
]

afterEach(() => {
  cleanup();
});

describe('<Card />', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <Card location="Manchester Piccadilly" city="Manchester" measurements={measurements} />
    );

    expect(container).toMatchSnapshot();
  });
});
