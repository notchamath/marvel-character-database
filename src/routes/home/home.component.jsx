import { useContext } from "react";

import {SearchResultsContext} from '../../contexts/search-results.context';
import { IdCard } from "../../components/id-card/id-card.component";
import { Spinner } from '../../components/spinner/spinner.component';


import './home.styles.scss';

export const Home = () => {
    const {searchResults, isLoading} = useContext(SearchResultsContext);

    return (
 
        <div className="home__container">
            {isLoading ? <Spinner/> :
            searchResults !== null && searchResults.map(element => <IdCard element={element} key={element.id}/>)}
        </div>
    
    )
}