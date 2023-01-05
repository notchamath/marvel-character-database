const ProfileCard = ({profileInfo}) => {

    let url = `${profileInfo.thumbnail.path}.${profileInfo.thumbnail.extension}`;

    return (
        <div className="profile-card__container">
            <div>{profileInfo.name}</div>
            <img src={url} alt={profileInfo.name} />
        </div>
    )
}

export default ProfileCard;