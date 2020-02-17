import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input from '../../01-Atoms/Input/Input';
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
    const { container } = render(<List />);

    expect(container).toMatchSnapshot();
  });

  it('should show location result of Aberdeen', async () => {
    const { getByTestId } = render(
      <ContextProvider>
        <Input />
        <List />
      </ContextProvider>
    );

    const input = getByTestId('location-input');
    const results = getByTestId('location-results');

    userEvent.click(input);
    await userEvent.type(input, 'Aberdeen');

    expect(results).toHaveAttribute('aria-hidden', 'false');
    expect(results.children.length).toBe(1);
    expect(results.children[0].textContent).toBe('Aberdeen');
    expect(results.children[0]).toHaveAttribute('aria-selected', 'false');
  });

  it('should focus to first location result', async () => {
    const { getByTestId } = render(
      <ContextProvider>
        <Input />
        <List />
      </ContextProvider>
    );

    const input = getByTestId('location-input');
    const results = getByTestId('location-results');

    userEvent.click(input);
    await userEvent.type(input, 'Aberdeen');
    await fireEvent.keyUp(input, { key: 'ArrowDown', code: 40 });

    expect(results).toHaveFocus();
    expect(results.children[0]).toHaveAttribute('aria-selected', 'true');
  });
})