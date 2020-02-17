import React from 'react';
import { cleanup, render, waitForDomChange } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input from '../../01-Atoms/Input/Input';
import List from '../../02-Molecules/List/List';
import CardsList from '../../03-Organisms/CardsList/CardsList';
import Card from './Card';
import { ContextProvider } from '../../Context';

const data = [
  {
    country: 'GB',
    name: 'Aberdeen',
    city: 'Aberdeen',
    count: 176315,
    locations: 3
  },
  {
    country: 'GB',
    name: 'Armagh',
    city: 'Armagh',
    count: 54863,
    locations: 1
  },
  {
    country: 'GB',
    name: 'Aston Hill',
    city: 'Aston Hill',
    count: 57542,
    locations: 1
  }
];

beforeAll(() => {
  localStorage.setItem('locations', JSON.stringify(data));
})

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
      <Card
        location="Manchester Piccadilly"
        city="Manchester"
        measurements={measurements}
      />
    );

    expect(container).toMatchSnapshot();
  });

  it('should remove first item from locations list of 5', async () => {
    const { container, getByTestId } = render(
      <ContextProvider>
        <Input />
        <List />
        <CardsList />
      </ContextProvider>
    );

    const input = getByTestId('location-input');
    const results = getByTestId('location-results');
    const locations: any = getByTestId('locations-list');

    userEvent.click(input);
    await userEvent.type(input, 'Aberdeen');
    userEvent.click(results.children[0]);
    await waitForDomChange({ container });
    userEvent.click(locations.children[0].firstElementChild);

    expect(locations.children.length).toBe(4);
  });
});
