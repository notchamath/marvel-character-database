import { useContext} from 'react';
import {useNavigate} from 'react-router-dom';

import { UserContext } from '../../contexts/user.context';

import './id-btn.styles.scss';

export default function IdBtn({element}) {
    const {currentUser, team, setTeam} = useContext(UserContext);
    const navigate = useNavigate();

    const addToTeam = () => {
        if(currentUser) setTeam(prevTeam => [...prevTeam, element]);
    };
    
    const removeFromTeam = () => {
        if(currentUser) setTeam(prevTeam => prevTeam.filter(person => person.id !== element.id));
    };
    
    const goLogIn = () => navigate(`/auth`);
    

    return (
        <>
        {
            !currentUser &&
            <div className='idBtn__add-btn' onClick={goLogIn}>
                <span className="material-symbols-outlined idBtn__add-btn-add">add_circle</span>
                <span className="idBtn__add-btn_tooltip-add">Add to team</span>
            </div>
        }
        {
            currentUser && team && team.find(member => member.id === element.id) &&
            <div className='idBtn__add-btn' onClick={removeFromTeam}>
                <span className="material-symbols-outlined idBtn__add-btn-check">check_circle</span>
                <span className="idBtn__add-btn_tooltip-check">Remove</span>
            </div>
        }
        {   
            currentUser && team && !team.find(member => member.id === element.id) &&
            <div className='idBtn__add-btn' onClick={addToTeam}>
                <span className="material-symbols-outlined idBtn__add-btn-add">add_circle</span>
                <span className="idBtn__add-btn_tooltip-add">Add to team</span>
            </div>
        }
        </>
    )
}