import Tabs from '../tabs/tabs.component';
import useGetImage from '../../custom-hooks/useGetImage';

import './profile-card.styles.scss';

const ProfileCard = ({profileInfo}) => {

    let url = useGetImage(profileInfo.thumbnail.path, profileInfo.thumbnail.extension);

    return (
        <div className="profile-card__container">

            <div className='profile-card__name'>
                {profileInfo.name}
            </div>

            <img src={url} alt={profileInfo.name} />

            {profileInfo.description && profileInfo.description.slice(0,2) !== '<p' && <div className='profile-desc'>{profileInfo.description}</div>}

            <Tabs comics={profileInfo.comics} series={profileInfo.series} stories={profileInfo.stories}/>
            
            <a target="_blank" rel="noreferrer" href={profileInfo.urls[0].url}>More Info at Marvel</a>
        </div>
    )
}

export default ProfileCard;