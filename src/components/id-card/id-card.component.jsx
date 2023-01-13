import {forwardRef} from 'react';
import {useNavigate} from 'react-router-dom';

import IdBtn from '../id-btn/Id-btn.component';

import useGetImage from '../../custom-hooks/useGetImage';

import './id-card.styles.scss';

// info about character passed in, with a ref for last item (if called from home)
export const IdCard = forwardRef(({element}, ref) => {

    // clicking on id-card send user to profile page
    const navigate = useNavigate();
    const onNavigateHandler = () => navigate(`/${element.id}`);

    // custom hook to set the url of each image
    let url = useGetImage(element.thumbnail.path, element.thumbnail.extension);

    return(
        <div className="IdCard__container" ref={ref} >

            <div className="IdCard__details" onClick={onNavigateHandler}>
                <img src={url} alt={element.name} />
                
                <div className="IdCard__name">
                    {element.name}
                </div>
            </div>

            <IdBtn className={'IdCard__btn'} element={{
                'id': element.id,
                'name': element.name,
                'thumbnail': element.thumbnail
                }}
            />
        </div>
    )
})