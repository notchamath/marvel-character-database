import {useState, useContext} from 'react';
import { BsSearch } from 'react-icons/bs';

import {SearchResultsContext} from '../../contexts/search-results.context';

import './searchbar.styles.scss';

export const Searchbar = () => {

    const requestLimit = 100;
    const {setSearchResults} = useContext(SearchResultsContext);
    
    const loadData = async (query) => {

        try{
            const url = `https://gateway.marvel.com/v1/public/characters?limit=${requestLimit}&nameStartsWith=${query}&ts=${process.env.REACT_APP_TS}&apikey=${process.env.REACT_APP_PUBLIC_KEY}&hash=${process.env.REACT_APP_HASH}`;
            
            // const url = `https://gateway.marvel.com/v1/public/characters?limit=${requestLimit}&offset=${offset}&ts=${process.env.REACT_APP_TS}&apikey=${process.env.REACT_APP_PUBLIC_KEY}&hash=${process.env.REACT_APP_HASH}`;
            
            const res = await fetch(url);
            const response = await res.json();
            const data = response.data.results;
            
            return data;
            
        } catch(err) {
            console.log('There was an error fetching data:::', err);
        }
        
    }

    const handleSearch = (event) => {
        event.preventDefault();
        loadData(event.target[0].value).then(data => setSearchResults(data));
    }
    
    return(
        <div className="search">
            <form onSubmit={handleSearch}>
                <input label='search' type="text" placeholder='Search'/>
                <button type='submit'><BsSearch/></button>
            </form>
        </div>
    )
}