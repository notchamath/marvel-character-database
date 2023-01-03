import './id-card.styles.scss';

export const IdCard = ({element}) => {

    return(
        <div className="IdCard-container">
            <img src={`${element.thumbnail.path}.${element.thumbnail.extension}`} alt={element.name} />
            <div className="IdCard__name">
                {element.name}
            </div>
            <div className="IdCard__age">
                {element.id}
            </div>            
        </div>
    )
}