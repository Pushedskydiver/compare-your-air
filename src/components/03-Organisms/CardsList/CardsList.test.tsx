import React from 'react';
import { cleanup, render, waitForDomChange } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input from '../../01-Atoms/Input/Input';
import List from '../../02-Molecules/List/List';
import CardsList from './CardsList';
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

afterEach(() => {
  cleanup();
});

describe('<CardsList />', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <CardsList />
    );
    expect(container).toMatchSnapshot();
  });

  it('should output cities in Aberdeen to locations list', async () => {
    const { container, getByTestId } = render(
      <ContextProvider>
        <Input />
        <List />
        <CardsList />
      </ContextProvider>
    );

    const input = getByTestId('location-input');
    const results = getByTestId('location-results');
    const locations = getByTestId('locations-list');

    userEvent.click(input);
    await userEvent.type(input, 'Aberdeen');
    userEvent.click(results.children[0]);
    await waitForDomChange({ container });

    expect(locations.children.length).toBeGreaterThan(0);
  });
})