import './id-card.styles.scss';

export const IdCard = ({element}) => {
    console.log(element.login.uuid);

    return(
        <div className="IdCard-container">
            <img src={element.picture.medium} alt={element.name.last} />
            <div className="IdCard__name">
                {element.name.title} {element.name.first} {element.name.last}
            </div>
        </div>
    )
}