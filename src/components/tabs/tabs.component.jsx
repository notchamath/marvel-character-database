import { useState } from 'react';
import './tabs.styles.scss';

// tabs component will dispaly comics, series, stories sent from profile card
export default function Tabs({comics, series, stories}) {
    const [toggleState, setToggleState] = useState(1);

    // determine which tab the user clicked on and open the right tab and content accordingly, hide the rest
    const toggleActive = (idx) => {
        setToggleState(idx);
    }

    return (
        <div className="tabs__container">

            <div className="tabs__titles">

                <div className={toggleState === 1 ? 'tabs__title active' : 'tabs__title'} onClick={() => toggleActive(1)}>
                    COMICS <span>{comics.available}</span>
                </div>

                <div className={toggleState === 2 ? 'tabs__title active' : 'tabs__title'} onClick={() => toggleActive(2)}>
                    SERIES <span>{series.available}</span>
                </div>

                <div className={toggleState === 3 ? 'tabs__title active' : 'tabs__title'} onClick={() => toggleActive(3)}>
                    STORIES <span>{stories.available}</span>
                </div>

            </div>
            
            <div className="tabs__content">

                <div className={toggleState === 1 ? 'tabs__content-col content-display' : 'tabs__content-col'}>
                    {comics.available > 0 && comics.items.map((element, index) => {
                        return <div className='tabs__element' key={index + element.name}>{element.name}</div>
                    })}
                </div>

                <div className={toggleState === 2 ? 'tabs__content-col content-display' : 'tabs__content-col'}>
                    {series.available > 0 && series.items.map((element, index) => {
                        return <div className='tabs__element' key={index + element.name}>{element.name}</div>
                    })}
                </div>

                <div className={toggleState === 3 ? 'tabs__content-col content-display' : 'tabs__content-col'}>
                    {stories.available > 0 && stories.items.map((element, index) => {
                        return <div className='tabs__element' key={index + element.name}>{element.name}</div>
                    })}
                </div>
            </div>

        </div>
    )
}
