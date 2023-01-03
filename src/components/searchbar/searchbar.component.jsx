import {useContext} from 'react';
import { BsSearch } from 'react-icons/bs';

import {SearchResultsContext} from '../../contexts/search-results.context';

import { loadData } from '../../custom-functions/loadData';

import './searchbar.styles.scss';

export const Searchbar = () => {

    const {setSearchResults} = useContext(SearchResultsContext);

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