import {createContext, useState} from 'react';

export const SearchResultsContext = createContext({
    searchResults: null,
    setSearchResults: () => null,
    isLoading: null,
    setIsLoading: () => null,
    offset: 100,
    setOffset: () => null,
    hasMore: true,
    setHasMore: () => null,
});

export const SearchResultsProvider = ({children}) => {

    const [searchResults, setSearchResults] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [offset, setOffset] = useState(0);
    const [hasMore, setHasMore] = useState(true);

    const value = {searchResults, setSearchResults, isLoading, setIsLoading, offset, setOffset, hasMore, setHasMore};

    return <SearchResultsContext.Provider value={value}>{children}</SearchResultsContext.Provider>
}