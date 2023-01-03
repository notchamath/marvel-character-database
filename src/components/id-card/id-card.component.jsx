import {forwardRef} from 'react';

import './id-card.styles.scss';

export const IdCard = forwardRef(({element}, ref) => {

    return(
        <div className="IdCard-container">
            <img src={`${element.thumbnail.path}.${element.thumbnail.extension}`} alt={element.name} />
            <div className="IdCard__name">
                {element.name}
            </div>
            <div ref={ref} className="IdCard__id">
                {element.id}
            </div>            
        </div>
    )
})