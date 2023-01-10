import {useContext} from 'react';
import {useNavigate} from 'react-router-dom';

import { UserContext } from '../../contexts/user.context';

import './id-btn.styles.scss';

export default function IdBtn({className, element}) {
    const {currentUser, team, setTeam} = useContext(UserContext);
    const navigate = useNavigate();

    const addToTeam = () => {
        if(currentUser) setTeam(prevTeam => [...prevTeam, element]);
    };
    
    const removeFromTeam = () => {
        if(currentUser) setTeam(prevTeam => prevTeam.filter(person => person.id !== element.id));
    };
    
    const goLogIn = () => navigate(`/auth`);

    const chooseButton = () => {

        if(!currentUser){

            return (
                <div className={`idBtn__add-btn ${className}`} onClick={goLogIn}>
                    <span className="idBtn__add-btn-add">
                        <span className='material-symbols-outlined'>favorite</span>
                    </span>
                    <span className="idBtn__add-btn_tooltip">Favorite</span>
                </div>
            );

        } else if (currentUser && team && team.find(member => member.id === element.id)){
            return (
                <div className={`idBtn__add-btn ${className}`} onClick={removeFromTeam}>
                    <span className="idBtn__add-btn-add">
                        <span className='material-symbols-outlined idBtn__liked'>favorite</span>
                    </span>
                    <span className="idBtn__add-btn_tooltip">Remove</span>
                </div>
            );

        } else {

            return (
                <div className={`idBtn__add-btn ${className}`} onClick={addToTeam}>
                    <span className="idBtn__add-btn-add">
                        <span className='material-symbols-outlined'>favorite</span>
                    </span>
                    <span className="idBtn__add-btn_tooltip">Favorite</span>
                </div>
            );
        }
    }

    return (
        <>
        {
            chooseButton()
        }
        </>
    )
}