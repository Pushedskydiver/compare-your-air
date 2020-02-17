import React, { createContext, useEffect, useState } from 'react';
import { fetchData } from './Utils/Utils';

type ProviderProps = {
  focusToInput?: boolean;
  searchResults?: Array<any>;
  searchTerm?: string;
  selectedLocations?: Array<any>;
  children: any
};

type LocationObject = {
  name: string
}

type LocationsArray = {
  results: Array<any>
}

export const Context = createContext({
  setInputFocus: (focus: boolean) => focus,
  focusToInput: false,
  focusToResult: false,
  removeSelectedLocation: (location: string) => location,
  searchResults: [],
  searchTerm: '',
  selectLocation: (location: string) => location,
  selectedLocations: [],
  showResults: false,
  handleSearchTerm: (searchTerm: string) => searchTerm,
  handleShowResults: (showResults: boolean) => showResults
});

export function ContextProvider(props: ProviderProps) {
  const locations = JSON.parse(localStorage.getItem('locations') || '[]');
  const [state, setState] = useState({
    focusToInput: false,
    focusToResult: false
  });

  const [searchSate, setSearchState] = useState({
    searchTerm: '',
    searchResults: locations
  });

  const [resultsState, setResultsState] = useState({
    selectedLocations: [],
    showResults: false,
  });

  function filterLocations(location: LocationObject, searchTerm: string) {
    return location.name.toLowerCase().includes(searchTerm.toLowerCase());
  }

  function handleSearchTerm(searchTerm: string) {
    const searchResults = locations.filter((location: LocationObject) => filterLocations(location, searchTerm));

    setSearchState({ ...searchSate, searchResults });

    return searchTerm;
  }

  function handleShowResults(showResults: boolean) {
    setResultsState({ ...resultsState, showResults });

    return showResults;
  }

  function removeSelectedLocation(location: string) {
    const locations = resultsState.selectedLocations;
    const selectedLocations = locations.filter((item: any) => item.location !== location);

    setResultsState({ ...resultsState, selectedLocations });

    return location;
  }

  function removeDuplicateLocations(v: any, i: number, a: Array<any>) {
    return a.findIndex(t => (t.location === v.location)) === i;
  }

  function handleSelectedLocation({ results }: any) {
    const { selectedLocations } = resultsState;
    const mergedLocations: any = [...results, ...selectedLocations];
    const updatedLocations = mergedLocations.filter(removeDuplicateLocations);
    
    setResultsState({ ...resultsState, selectedLocations: updatedLocations });

    return selectedLocations;
  }

  function selectLocation(location: string) {
    const api = `https://api.openaq.org/v1/latest?city=${location}`;
    
    fetchData(api)
      .then(handleSelectedLocation)
      .catch(error => console.error(error));

    return location;
  }

  function setInputFocus(focus: boolean) {    
    setState({ ...state, focusToInput: focus });

    return focus;
  }

  useEffect(() => {
    const locationsData = localStorage.getItem('locations');

    function setLocations(locations: LocationsArray) {
      const searchResults = locations.results;      

      localStorage.setItem('locations', JSON.stringify(searchResults));
      setSearchState({ ...searchSate, searchResults });
    }

    function fetchCitiesData() {
      const api = 'https://api.openaq.org/v1/cities?country=GB';

      fetchData(api)
        .then(setLocations)
        .catch(error => console.error(error));
    }

    if (locationsData === null) {
      fetchCitiesData();
    }
  }, [state, searchSate]);

  const data = {
    ...state,
    ...searchSate,
    ...resultsState,
    handleSearchTerm,
    handleShowResults,
    removeSelectedLocation,
    selectLocation,
    setInputFocus
  };

  return (
    <Context.Provider value={data}>
      {props.children}
    </Context.Provider>
  );
}

export default Context;