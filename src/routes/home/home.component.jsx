import { useContext } from "react";

import {SearchResultsContext} from '../../contexts/search-results.context';
import { IdCard } from "../../components/id-card/id-card.component";

import './home.styles.scss';

export const Home = () => {
    const {searchResults} = useContext(SearchResultsContext);

    return (
 
        <div className="home__container">
            {searchResults === null ? <div>Loading...</div> :
                searchResults.map(element => <IdCard element={element} key={element.id}/>)
            }
        </div>
    
    )
}