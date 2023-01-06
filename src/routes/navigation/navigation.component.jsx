import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import {UserContext} from '../../contexts/user.context';
import { Searchbar } from "../../components/searchbar/searchbar.component";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import Logo from "../../components/logo/logo.component"; 

import './navigation.styles.scss';

export const Navigation = () => {

    const {currentUser, setCurrentUser} = useContext(UserContext);

    const signOutHandler = async () => {
        await signOutUser();
        setCurrentUser(null);
    }

    return (
        <>
            <nav className="navigation__nav">
                <Link to='/' className="logo-container">
                    <Logo/>
                </Link>

                <Searchbar/>

                {
                    currentUser?
                    <div className="sign-up-btn" onClick={signOutHandler}>Sign Out</div> :
                    <Link to='/auth' className="sign-up-btn">Sign In</Link> 
                }

            </nav>

            <aside className="navigation__aside">Data provided by Marvel. © 2014 Marvel</aside>
            <Outlet></Outlet>
        </>
    )
}