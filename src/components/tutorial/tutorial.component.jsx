import { useContext } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { SearchResultsContext } from '../../contexts/search-results.context';

import './tutorial.styles.scss';

// the welcome tutorial message to be displayed at homepage
// receives a css class from home component
export default function Tutorial({className}) {

    const {setTutorialOpen} = useContext(SearchResultsContext);

    // lets the user close the message
    const closeTutorial = (e) => {
        e.target.parentNode.classList.toggle('tutorial__open');
        setTutorialOpen(false);
    }

    return (
        <div className={`tutorial__container tutorial__open ${className}`}>
                <span className="tutorial__close-btn" onClick={closeTutorial}>
                    <AiOutlineClose/>
                </span>
            <div className='tutotial__message'>
                Welcome to Marvel Characters Database. You can search for any Marvel Comic Book characters here. Click on their photo to see more details about them. 
                <br/>
                <br/>
                If you are signed in, you can save your favorite characters to your profile by hitting the Like button and they will show up on the My Team page.
                <br/>
                <br/>
                See full documentation <a rel="noreferrer" target='_blank' href="https://github.com/notchamath/marvel-character-database#readme">Here</a>.
            </div>
        </div>
    )
}
