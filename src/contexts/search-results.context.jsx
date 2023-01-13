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
    tutorialOpen: true,
    setTutorialOpen: () => null,
});

export const SearchResultsProvider = ({children}) => {

    // array of search results
    const [searchResults, setSearchResults] = useState([]);

    // shows if the app is loading more data
    const [isLoading, setIsLoading] = useState(true);

    // make sure not to fetch same data from api
    const [offset, setOffset] = useState(0);

    // check if the api has more new data to be fetched
    const [hasMore, setHasMore] = useState(true);

    // show if the user has closed the tutorial message on homepage. true=still open
    const [tutorialOpen, setTutorialOpen] = useState(true);

    const value = {searchResults, setSearchResults, isLoading, setIsLoading, offset, setOffset, hasMore, setHasMore, tutorialOpen, setTutorialOpen};

    return <SearchResultsContext.Provider value={value}>{children}</SearchResultsContext.Provider>
}