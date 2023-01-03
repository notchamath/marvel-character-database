import { useEffect, useContext } from "react";

import {SearchResultsContext} from '../../contexts/search-results.context';
import { IdCard } from "../../components/id-card/id-card.component";
import { Spinner } from '../../components/spinner/spinner.component';

import {loadData} from '../../custom-functions/loadData';

import './home.styles.scss';

export const Home = () => {
    const {searchResults, setSearchResults} = useContext(SearchResultsContext);

    useEffect(() => {
        loadData('').then(data => setSearchResults(data));
    }, [])

    return (
 
        <div className="home__container">
            {searchResults === null ? <Spinner/> :
                searchResults.map(element => <IdCard element={element} key={element.id}/>)
            }
        </div>
    
    )
}