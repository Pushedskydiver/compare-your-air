import React, { memo, useEffect, useContext, useRef, useState } from 'react';
import InputStyles from './Input.styles';
import Context from '../../Context';

const Input = () => {
  const { handleSearchTerm, handleShowResults, focusToInput, setInputFocus, showResults } = useContext(Context);
  const [value, setValue] = useState('Enter city name…');
  const inputRef = useRef<HTMLInputElement>(null);

  function handleChange(event: any) {
    const value: string = event.target.value;    

    if (!showResults) {
      handleShowResults(true);
    }

    setValue(value);
    handleSearchTerm(value);
  }

  function handleBlur() {
    if (value === '') {
      setValue('Enter city name…');
    }
  }

  function handleFocus() {
    if (value === 'Enter city name…') {
      setValue('');
      return;
    }

    if (value.length > 0) {
      handleSearchTerm(value);
    }
  }

  function handleClick() {
    if (!focusToInput) {
      setInputFocus(true);
    }

    handleShowResults(true);
  }

  function handleArrowDown(target: any) {
    if (!showResults) {
      handleShowResults(true);
    }

    setInputFocus(false);
    target.nextElementSibling.focus();
  }

  function handleKeyUpEvent(event: any) {
    if (event.key === 'ArrowDown') {
      handleArrowDown(event.target);
    }
  }

  function handleKeyDownEvent(event: any) {
    if (event.key === 'Tab') {
      setInputFocus(false);
    }
  }

  useEffect(() => {
    if (focusToInput && inputRef.current !== null) {
      inputRef.current.focus();
    }
  }, [focusToInput, inputRef]);

  return (
    <InputStyles
      type="text"
      id="city"
      ref={inputRef}
      role="combobox"
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
      onFocus={handleFocus}
      onClick={handleClick}
      onKeyUp={handleKeyUpEvent}
      onKeyDown={handleKeyDownEvent}
      aria-autocomplete="list"
      aria-owns="results"
      autoComplete="off"
    />
  );
}

export default memo(Input);
