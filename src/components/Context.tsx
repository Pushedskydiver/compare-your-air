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
  removeSelectedLocation: (location: string) => location,
  searchResults: [],
  searchTerm: '',
  selectLocation: (location: string) => location,
  selectedLocations: [],
  handleSearchTerm: (searchTerm: string) => searchTerm
});

export function ContextProvider(props: ProviderProps) {
  const locations = JSON.parse(localStorage.getItem('locations') || '[]');
  const [searchSate, setSearchState] = useState({
    searchTerm: '',
    searchResults: locations
  });

  const [resultsState, setResultsState] = useState({
    selectedLocations: []
  });

  function filterLocations(location: LocationObject, searchTerm: string) {
    return location.name.toLowerCase().includes(searchTerm.toLowerCase());
  }

  function handleSearchTerm(searchTerm: string) {
    const searchResults = locations.filter((location: LocationObject) => filterLocations(location, searchTerm));

    setSearchState({ ...searchSate, searchResults });

    return searchTerm;
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
  }, [searchSate]);

  const data = {
    ...searchSate,
    ...resultsState,
    handleSearchTerm,
    removeSelectedLocation,
    selectLocation,
  };

  return (
    <Context.Provider value={data}>
      {props.children}
    </Context.Provider>
  );
}

export default Context;