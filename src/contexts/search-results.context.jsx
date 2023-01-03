import {createContext, useState} from 'react';

export const SearchResultsContext = createContext({
    searchResults: null,
    setSearchResults: () => null
});

export const SearchResultsProvider = ({children}) => {

    const [searchResults, setSearchResults] = useState(null);
    const value = {searchResults, setSearchResults};

    return <SearchResultsContext.Provider value={value}>{children}</SearchResultsContext.Provider>
}