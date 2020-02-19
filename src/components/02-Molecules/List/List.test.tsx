import React from 'react';
import { cleanup, render } from '@testing-library/react';
import List from './List';
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

describe('<List />', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <ContextProvider>
        <List />
      </ContextProvider>
    );

    expect(container).toMatchSnapshot();
  });
})
