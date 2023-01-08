import {createContext, useState, useEffect} from 'react';

import { onAuthStateChangedListener, createUserDocFromAuth, getTeamFromDb, setTeamOnDb } from '../utils/firebase/firebase.utils';

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
    team: null,
    setTeam: () => null
});

export const UserProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState(null);
    const [team, setTeam] = useState(null);
    const value = {currentUser, setCurrentUser, team, setTeam};

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener(async (user) => {
            setCurrentUser(user);

            if(user) {
                createUserDocFromAuth(user).then(userDocRef => {
                    getTeamFromDb(userDocRef).then(team => setTeam(team));
                });
            }
            if(!user) setTeam(null);
        });
        
        return unsubscribe;
    }, []);

    useEffect(()=>{
        if(currentUser) {
            setTeamOnDb(currentUser, team);
        }
    }, [team])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}