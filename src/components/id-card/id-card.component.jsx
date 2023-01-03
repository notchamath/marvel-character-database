import {forwardRef} from 'react';
import secondaryImg from '../../assets/photo-unavailable.png';

import './id-card.styles.scss';

export const IdCard = forwardRef(({element}, ref) => {

    let url = `${element.thumbnail.path}.${element.thumbnail.extension}`;

    if(url.slice(-17) == "not_available.jpg" || url.slice(-17) == "4c002e0305708.gif"){
        url = secondaryImg;
    } 

    return(
        <div className="IdCard-container">
            <img src={url} alt={element.name} />
            <div className="IdCard__name">
                {element.name}
            </div>
            <div ref={ref} className="IdCard__id">
                {element.id}
            </div>            
        </div>
    )
})