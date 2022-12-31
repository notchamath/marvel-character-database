import {useState} from 'react';
import { BsSearch } from 'react-icons/bs';

import useSearchDb from '../../custom-hooks/useSearchDb';

import './searchbar.styles.scss';

export const Searchbar = () => {
    const [query, setQuery] = useState('spider-man');
    const [offset, setOffset] = useState(0);

    const handleSearch = (e) => {
        setQuery(e.target.value);
        setOffset(0);   //need to change
    }

    const {loading, error, persons, hasMore} = useSearchDb(query, offset);

    return(
        <div className="search">
            <input type="text" placeholder='Search' onChange={handleSearch}/>
            <button type="submit"><BsSearch/></button>
        </div>
    )
}