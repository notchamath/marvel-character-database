import {createContext, useState, useEffect} from 'react';

import { onAuthStateChangedListener, createUserDocFromAuth, getTeamFromDb, setTeamOnDb } from '../utils/firebase/firebase.utils';

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
    team: null,
    setTeam: () => null
});

export const UserProvider = ({children}) => {

    // current user info stored once user signs in
    const [currentUser, setCurrentUser] = useState(null);

    // user's team is stored here
    const [team, setTeam] = useState(null);

    const value = {currentUser, setCurrentUser, team, setTeam};

    useEffect(() => {
        // on mount, set a listener to see if user changes
        const unsubscribe = onAuthStateChangedListener(async (user) => {
            setCurrentUser(user);

            if(user) {
                // if there is a user, get their team from firestore and update context
                createUserDocFromAuth(user).then(userDocRef => {
                    getTeamFromDb(userDocRef).then(team => setTeam(team));
                });
            }
            // if user signs out, reset the team in context
            if(!user) setTeam(null);
        });
        
        // on unmout, remove listener
        return unsubscribe;
    }, []);
    
    // if there is a user in context, whenever the team is changed in context, update firestore backend
    useEffect(()=>{
        if(currentUser) {
            setTeamOnDb(currentUser, team);
        }
    }, [team])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}