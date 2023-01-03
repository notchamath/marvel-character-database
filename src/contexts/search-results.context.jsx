import {createContext, useState} from 'react';

export const SearchResultsContext = createContext({
    searchResults: null,
    setSearchResults: () => null,
    isLoading: null,
    setIsLoading: () => null
});

export const SearchResultsProvider = ({children}) => {

    const [searchResults, setSearchResults] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const value = {searchResults, setSearchResults, isLoading, setIsLoading};

    return <SearchResultsContext.Provider value={value}>{children}</SearchResultsContext.Provider>
}