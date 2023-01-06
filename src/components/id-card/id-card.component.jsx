import {forwardRef} from 'react';
import {useNavigate} from 'react-router-dom';

import useGetImage from '../../custom-hooks/useGetImage';

import './id-card.styles.scss';

export const IdCard = forwardRef(({element}, ref) => {

    const navigate = useNavigate();
    const onNavigateHandler = () => navigate(`/${element.id}`);

    let url = useGetImage(element.thumbnail.path, element.thumbnail.extension);

    return(
        <div className="IdCard-container" ref={ref} onClick={onNavigateHandler}>
        
            <img src={url} alt={element.name} />
            
            <div className="IdCard__name">
                {element.name}
            </div>       
        </div>
    )
})