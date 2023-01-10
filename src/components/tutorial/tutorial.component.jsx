import { useContext } from 'react';

import { SearchResultsContext } from '../../contexts/search-results.context';

import './tutorial.styles.scss';

export default function Tutorial({className}) {

    const {setTutorialOpen} = useContext(SearchResultsContext);

    const closeTutorial = (e) => {
        e.target.parentNode.classList.toggle('tutorial__open');
        setTutorialOpen(false);
    }

    return (
        <div className={`tutorial__container tutorial__open ${className}`}>
                <span className="material-symbols-outlined" onClick={closeTutorial}>
                    close
                </span>
            <div className='tutotial__message'>
                Welcome to Marvel Characters Database. You can search for any Marvel Comic Book characters here. Click on their photo to see more details about them. 
                <br/>
                <br/>
                If you are signed in, you can save your favorite characters to your profile and they will show up on your Favorites Page.
                <br/>
                <br/>
                See full documentation <a rel="noreferrer" target='_blank' href="https://github.com/notchamath/marvel-character-database#readme">Here</a>.
            </div>
        </div>
    )
}
