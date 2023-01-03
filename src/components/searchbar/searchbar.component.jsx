import {useState} from 'react';
import { BsSearch } from 'react-icons/bs';

import useLoadData from '../../custom-hooks/useLoadData';

import './searchbar.styles.scss';

export const Searchbar = () => {

    const [query, setQuery] = useState('');

    const handleSearch = (event) => {
        event.preventDefault();
        setQuery(event.target[0].value)
    }

    useLoadData(query);
    
    return(
        <div className="search">
            <form onSubmit={handleSearch}>
                <input label='search' type="text" placeholder='Search'/>
                <button type='submit'><BsSearch/></button>
            </form>
        </div>
    )
}