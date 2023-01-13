import {useContext, useRef, useCallback} from "react";

import {SearchResultsContext} from '../../contexts/search-results.context';
import { IdCard } from "../../components/id-card/id-card.component";
import { Spinner } from '../../components/spinner/spinner.component';
import Tutorial from "../../components/tutorial/tutorial.component";

import './home.styles.scss';

const Home = () => {
    
    const {searchResults, isLoading, setOffset, hasMore, tutorialOpen} = useContext(SearchResultsContext);
    const observer = useRef();

    // set a reference for last element of results to enable infinite scroll
    const lastElementRef = useCallback(node => {
        if (isLoading) return;
        if (observer.current) observer.current.disconnect();

        observer.current = new IntersectionObserver(entries => {

            // when last element is on screen and api has more new data, increase offset
            if(entries[0].isIntersecting && hasMore) {
                setOffset(prevOffset => prevOffset + 100);
            }
        })
        
        if (node) observer.current.observe(node);

    }, [isLoading, hasMore]);

    return (
 
        <div className="home__container">
            {/* tutorial message */}
            {!isLoading && tutorialOpen && <Tutorial className="home__messages"/>}

            {/* id cards for each character */}
            {searchResults.length > 0 && searchResults.map((element, idx) => {
                if(searchResults.length === idx + 1){
                    return <IdCard ref={lastElementRef} element={element} key={element.id}/>
                } else {
                    return <IdCard element={element} key={element.id}/>
                }
            })}

            {/* no results found message */}
            {!isLoading && searchResults.length < 1 && <h1 className="home__messages">No Items Found... Try different variations of the name</h1>} 

            {/* loading screen */}
            {isLoading && <Spinner/>}
        </div>
    
    )
}

export default Home;