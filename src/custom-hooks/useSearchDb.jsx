import {useEffect, useState} from 'react'

export default function useSearchDb(query, offset) {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [persons, setPersons] = useState([]);
    const [hasMore, setHasMore] = useState(false);

    const requestLimit = 10;

    const loadData = async () => {

        try{
            const url = `https://gateway.marvel.com/v1/public/characters?limit=${requestLimit}&offset=${offset}&nameStartsWith=${query}&ts=${process.env.REACT_APP_TS}&apikey=${process.env.REACT_APP_PUBLIC_KEY}&hash=${process.env.REACT_APP_HASH}`;
            
            // const url = `https://gateway.marvel.com/v1/public/characters?limit=${requestLimit}&offset=${offset}&ts=${process.env.REACT_APP_TS}&apikey=${process.env.REACT_APP_PUBLIC_KEY}&hash=${process.env.REACT_APP_HASH}`;
            
            const res = await fetch(url);
            const response = await res.json();
            const data = response.data;
        
            setPersons((prevPersons) => {
                return [...new Set([...prevPersons, ...data.results.map(p => p.name)])];
            });

            setHasMore(data.total > data.count ? true : false);
    
        } catch(err) {
            console.log('There was an error fetching data:::', err);
            setError(true);
        }
    }

    useEffect(() => {
        setLoading(true);
        setError(false);
        loadData();
        setLoading(false);
    }, [query, offset])

    
    console.log(persons)

    return {loading, error, persons, hasMore};
}
