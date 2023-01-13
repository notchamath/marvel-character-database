import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

import useLoadData from '../../custom-hooks/useLoadData';

import './searchbar.styles.scss';

// searchbar component
export const Searchbar = () => {

    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    // when search form is submitted, prevent default (reload of the page), navigate to home from whichever page the user searched from and scroll to top
    const handleSearch = (event) => {
        event.preventDefault();
        setQuery(event.target[0].value);
        navigate(`/`);
        window.scrollTo(0, 0);
    }

    // custom hook to fetch data from api for searches. on first render receives an empty string
    useLoadData(query);
    
    return(
        <div className="search">
            <form onSubmit={handleSearch}>
                <input label='search' type="text" placeholder='Search by name'/>
                <button type='submit'>Search</button>
            </form>
        </div>
    )
}