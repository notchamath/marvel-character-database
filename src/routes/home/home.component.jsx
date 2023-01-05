import { useContext, useRef, useCallback} from "react";

import {SearchResultsContext} from '../../contexts/search-results.context';
import { IdCard } from "../../components/id-card/id-card.component";
import { Spinner } from '../../components/spinner/spinner.component';


import './home.styles.scss';

const Home = () => {
    
    const {searchResults, isLoading, setOffset, hasMore} = useContext(SearchResultsContext);
    const observer = useRef();

    const lastElementRef = useCallback(node => {
        if (isLoading) return;
        if (observer.current) observer.current.disconnect();

        observer.current = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting && hasMore) {
                setOffset(prevOffset => prevOffset + 100);
            }
        })
        
        if (node) observer.current.observe(node);

    }, [isLoading, hasMore]);

    return (
 
        <div className="home__container">

            {searchResults.length > 0 && searchResults.map((element, idx) => {
                if(searchResults.length === idx + 1){
                    return <IdCard ref={lastElementRef} element={element} key={element.id}/>
                } else {
                    return <IdCard element={element} key={element.id}/>
                }
            })}

            {searchResults.length < 1 && <h1>No Items Found... Try different variations of the name</h1>} 

            {isLoading && <Spinner/>} 
        </div>
    
    )
}

export default Home;