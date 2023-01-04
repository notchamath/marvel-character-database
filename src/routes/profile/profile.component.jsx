import {useParams} from "react-router-dom";

import useLoadProfile from '../../custom-hooks/useLoadProfile';

const Profile = () => {
    let { id } = useParams();
    const profileInfo = useLoadProfile(id);

    let url = null;
    if(profileInfo.thumbnail) {
        url = `${profileInfo.thumbnail.path}.${profileInfo.thumbnail.extension}`;
    }

    return (
        <>
            <div>{profileInfo.name}</div>
            <img src={url} alt={profileInfo.name} />
        </>
    )
}

export default Profile;