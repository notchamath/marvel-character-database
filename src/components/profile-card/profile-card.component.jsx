import Tabs from '../tabs/tabs.component';
import useGetImage from '../../custom-hooks/useGetImage';

import './profile-card.styles.scss';

// receive info about each character from profile page
const ProfileCard = ({profileInfo}) => {

    // get image url
    let url = useGetImage(profileInfo.thumbnail.path, profileInfo.thumbnail.extension);

    return (
        <div className="profile-card__container">

            <div className='profile-card__name'>
                {profileInfo.name}
            </div>

            <img src={url} alt={profileInfo.name} />

            {/* filtering out any <p> tags from api that isnt supposed to be there */}
            {profileInfo.description && profileInfo.description.slice(0,2) !== '<p' && <div className='profile-desc'>{profileInfo.description}</div>}

            {/* send info about comics, series, stories to tabs component */}
            <Tabs comics={profileInfo.comics} series={profileInfo.series} stories={profileInfo.stories}/>
            
            <a target="_blank" rel="noreferrer" href={profileInfo.urls[0].url}>More Info at Marvel</a>
        </div>
    )
}

export default ProfileCard;