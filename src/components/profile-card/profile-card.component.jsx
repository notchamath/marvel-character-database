const ProfileCard = ({profileInfo}) => {

    let url = `${profileInfo.thumbnail.path}.${profileInfo.thumbnail.extension}`;

    console.log(profileInfo)
    return (
        <div className="profile-card__container">
            <div>{profileInfo.name}</div>
            <div>{profileInfo.modified}</div>
            <img src={url} alt={profileInfo.name} />
            <div>{profileInfo.description}</div>
            <div>{profileInfo.comics.items[0].name}</div>
            <div>{profileInfo.series.items[0].name}</div>
            <div>{profileInfo.stories.items[0].name}</div>
            <a href={profileInfo.urls[0].url}>More Info</a>
        </div>
    )
}

export default ProfileCard;