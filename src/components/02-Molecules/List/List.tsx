import React, { useContext, useState } from 'react';
import ListStyles from './List.styles';
import Context from '../../Context';

type SearchResultsProps = {
  name: string
};

const List = () => {
  const { handleShowResults, focusToInput, searchResults, selectLocation, setInputFocus, showResults } = useContext(Context);
  const [optionInFocus, setOptionInFocus] = useState(0);

  function setSelectedLocation(event: any) {
    const value = event.target.textContent;
    
    selectLocation(value);
  }

  function handleBurEvent() {
    setOptionInFocus(0);
  }

  function handleArrowDown() {
    const focusNumber = optionInFocus + 1;
    const isLastFocusNumber = focusNumber === searchResults.length;

    if (isLastFocusNumber) {
      setOptionInFocus(0);
      return;
    }

    setOptionInFocus(focusNumber);
  }

  function handleInputFocus() {
    setInputFocus(true);
    handleShowResults(false);
  }

  function handleArrowUp() {
    const focusNumber = optionInFocus - 1;
    const isFirstFocusNumber = focusNumber < 0;

    if (isFirstFocusNumber) {
      handleInputFocus();
      return;
    }

    setOptionInFocus(focusNumber);
  }

  function handleEnter(location: SearchResultsProps) {
    selectLocation(location.name);
  }

  function handleKeyEvent(event: any) {
    if (event.key === 'Tab' || event.key === 'Escape') {
      handleInputFocus();
      setOptionInFocus(0);
      return;
    }

    if (event.key === 'ArrowDown') {
      handleArrowDown();
      return;
    }

    if (event.key === 'ArrowUp') {
      handleArrowUp();
      return;
    }

    if (event.key === 'Enter') {
      handleEnter(searchResults[optionInFocus]);
      return;
    }
  }

  function renderCity(location: SearchResultsProps, index: number) {    
    const isSelected = index === optionInFocus && !focusToInput;    

    if (showResults) {
      return (
        <li
          key={index}
          id={`${location.name}-${index}`}
          tabIndex={-1}
          onClick={setSelectedLocation}
          aria-selected={isSelected}
          role='option'
        >
          {location.name}
        </li>
      );
    }

    return '';
  }

  let activeCity = '';

  if (searchResults.length > 0) {    
    const { city } = searchResults[optionInFocus];
    activeCity = city;
  }

  return (
    <ListStyles
      id="results"
      role="listbox"
      tabIndex={!showResults ? -1 : 0}
      aria-activedescendant={`${activeCity}-${optionInFocus}`}
      aria-hidden={!showResults}
      onBlur={handleBurEvent}
      onKeyDown={handleKeyEvent}
    >
      {searchResults.map(renderCity)}
    </ListStyles>
  )
}

export default List;
