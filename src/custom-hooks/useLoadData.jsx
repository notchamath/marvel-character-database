import {useContext, useEffect} from 'react';

import {SearchResultsContext} from '../contexts/search-results.context';

// load data based on the query received
const useLoadData = (query) => {

    const {setSearchResults, setIsLoading, offset, setOffset, setHasMore} = useContext(SearchResultsContext);

    // whenever query have changed, reset search values in context
    useEffect(() => {
        setSearchResults([]);
        setOffset(0);
    }, [query])
    
    // whenever query and offset have changed, fetch new data
    useEffect(() => {
        
        setIsLoading(true);
        const fetchController = new AbortController();
        const {signal} = fetchController;
        
        const loadData = async (query) => {
            const requestLimit = 100;
            let url = null;
            
            if(query === '') {
                url = `https://gateway.marvel.com/v1/public/characters?limit=${requestLimit}&offset=${offset}&ts=${process.env.REACT_APP_TS}&apikey=${process.env.REACT_APP_PUBLIC_KEY}&hash=${process.env.REACT_APP_HASH}`;
            } else {
                url = `https://gateway.marvel.com/v1/public/characters?limit=${requestLimit}&nameStartsWith=${query}&ts=${process.env.REACT_APP_TS}&apikey=${process.env.REACT_APP_PUBLIC_KEY}&hash=${process.env.REACT_APP_HASH}`;
            }
            
            try{
                const res = await fetch(url, {signal});
                const response = await res.json();
                const data = response.data;

                if (offset + data.count >= data.total){
                    setHasMore(false);
                } else {
                    setHasMore(true)
                }
                setIsLoading(false);

                return data.results;
            
            } catch(err) {
                console.log('There was an error fetching data:::', err);
            }
        }
    
        loadData(query).then(data => setSearchResults(prevData => {
            if (prevData === undefined || prevData === null || data === undefined || data === null) return [];
            
            // add new data to previous data and return
            return([...prevData, ...data]);
        }));

        // whenever component unmounts abort fetch requests
        return () => {fetchController.abort()}

    }, [query, offset]);
    
}

export default useLoadData;