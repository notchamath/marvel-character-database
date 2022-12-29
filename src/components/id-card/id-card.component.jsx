import './id-card.styles.scss';

export const IdCard = ({element}) => {
    console.log(element);

    return(
        <div className="IdCard-container">
            <img src={element.picture.large} alt={element.name.last} />
            <div className="IdCard__name">
                {element.name.title} {element.name.first} {element.name.last}
            </div>
            <div className="IdCard__age">
                <span>Age: </span>{element.dob.age}
            </div>
            <div className="IdCard__location">
                <span>Lives in: </span>{element.location.city}, {element.location.country}
            </div>
            <div className="IdCard__email">
                <span>Email: </span>{element.email}
            </div>
        </div>
    )
}