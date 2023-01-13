import {useContext} from 'react';
import {useNavigate} from 'react-router-dom';

import { UserContext } from '../../contexts/user.context';

import './id-btn.styles.scss';

// Like/Unlike button component, receives css class and info about character from id-card component
export default function IdBtn({className, element}) {

    // Use context to set the team for/ read the team of each user
    const {currentUser, team, setTeam} = useContext(UserContext);
    const navigate = useNavigate();

    // Add character to team
    const addToTeam = () => {
        if(currentUser) setTeam(prevTeam => [...prevTeam, element]);
    };
    
    // Remove character from team
    const removeFromTeam = () => {
        if(currentUser) setTeam(prevTeam => prevTeam.filter(person => person.id !== element.id));
    };
    
    // if user not logged in navigate to auth page
    const goLogIn = () => navigate(`/auth`);


    // if user not logged in, return goLogIn function
    // if user is logged in and has current character in team, display Liked btn with removeFromTeam function
    // else display Like button
    const chooseButton = () => {

        if(!currentUser){

            return (
                <div className={`idBtn__add-btn ${className}`} onClick={goLogIn}>
                    <span className="idBtn__add-btn-add">
                        <span className='material-symbols-outlined'>favorite</span>
                    </span>
                    <span className="idBtn__add-btn_tooltip">Like</span>
                </div>
            );

        } else if (currentUser && team && team.find(member => member.id === element.id)){
            return (
                <div className={`idBtn__add-btn ${className}`} onClick={removeFromTeam}>
                    <span className="idBtn__add-btn-add">
                        <span className='material-symbols-outlined idBtn__liked'>favorite</span>
                    </span>
                    <span className="idBtn__add-btn_tooltip">Liked</span>
                </div>
            );

        } else {

            return (
                <div className={`idBtn__add-btn ${className}`} onClick={addToTeam}>
                    <span className="idBtn__add-btn-add">
                        <span className='material-symbols-outlined'>favorite</span>
                    </span>
                    <span className="idBtn__add-btn_tooltip">Like</span>
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