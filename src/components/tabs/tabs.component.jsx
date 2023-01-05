import { useState } from 'react';
import './tabs.styles.scss';

export default function Tabs({comics, series, stories}) {
    const [toggleState, setToggleState] = useState(1);

    const switchTab = (idx) => {
        setToggleState(idx);
    }

    return (
        <div className="tabs__container">
            <div className="tabs__block-tabs">
                <div className={toggleState === 1 ? 'tabs__tab active-tab' : 'tabs__tab'} onClick={() => switchTab(1)}>Comics</div>
                <div className={toggleState === 2 ? 'tabs__tab active-tab' : 'tabs__tab'} onClick={() => switchTab(2)}>Series</div>
                <div className={toggleState === 3 ? 'tabs__tab active-tab' : 'tabs__tab'} onClick={() => switchTab(3)}>Stories</div>
            </div>

            <div className="tabs__content-tabs">
                
                <div className={toggleState === 1 ? 'tabs__content active-content' : 'tabs__content'}>
                    {comics.available > 0 && comics.items.map(comic => {
                        return <div className='tabs__element' key={comic.name}>{comic.name}</div>
                    })}

                    <div className="tabs__total">
                        Total comics available: {comics.available}
                    </div>
                </div>

                <div className={toggleState === 2 ? 'tabs__content active-content' : 'tabs__content'}>
                    {series.available > 0 && series.items.map(comic => {
                        return <div className='tabs__element' key={comic.name}>{comic.name}</div>
                    })}

                    <div className="tabs__total">
                        Total series available: {series.available}
                    </div>
                </div>

                <div className={toggleState === 3 ? 'tabs__content active-content' : 'tabs__content'}>
                    {stories.available > 0 && stories.items.map(comic => {
                        return <div className='tabs__element' key={comic.name}>{comic.name}</div>
                    })}

                    <div className="tabs__total">
                        Total stories available: {stories.available}
                    </div>
                </div>
            </div>
        </div>
    )
}
