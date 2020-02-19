import React, { memo, useContext, useState } from 'react';
import InputStyles from './Input.styles';
import Context from '../../Context';

const Input = () => {
  const { selectLocation, searchResults } = useContext(Context);
  const [value, setValue] = useState('Enter city name…');

  function handleChangeEvent(event: any) {
    const value: string = event.target.value;
    const result: any = searchResults.find((item: any) => item.name === value);
    const isMatch = result ? result.name.toLowerCase() : null;

    if (isMatch && isMatch === value.toLowerCase()) {
      selectLocation(value);
    }

    setValue(value);
  }

  function handleBlurEvent() {
    if (value === '') {
      setValue('Enter city name…');
    }
  }

  function handleFocusEvent() {
    if (value === 'Enter city name…') {
      setValue('');
      return;
    }
  }

  return (
    <InputStyles
      data-testid="location-input"
      type="text"
      id="city"
      list="results"
      value={value}
      onChange={handleChangeEvent}
      onBlur={handleBlurEvent}
      onFocus={handleFocusEvent}
    />
  );
}

export default memo(Input);
