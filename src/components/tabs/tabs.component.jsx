import { useState } from 'react';
import './tabs.styles.scss';

export default function Tabs({comics, series, stories}) {
    const [toggleState, setToggleState] = useState(1);

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
                    {comics.available > 0 && comics.items.map((comic, index) => {
                        return <div className='tabs__element' key={index + comic.name}>{comic.name}</div>
                    })}
                </div>

                <div className={toggleState === 2 ? 'tabs__content-col content-display' : 'tabs__content-col'}>
                    {comics.available > 0 && series.items.map((comic, index) => {
                        return <div className='tabs__element' key={index + comic.name}>{comic.name}</div>
                    })}
                </div>

                <div className={toggleState === 3 ? 'tabs__content-col content-display' : 'tabs__content-col'}>
                    {comics.available > 0 && stories.items.map((comic, index) => {
                        return <div className='tabs__element' key={index + comic.name}>{comic.name}</div>
                    })}
                </div>
            </div>

        </div>
    )
}
