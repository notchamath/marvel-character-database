import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import {UserContext} from '../../contexts/user.context';
import { Searchbar } from "../../components/searchbar/searchbar.component";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import Logo from "../../components/logo/logo.component"; 

import './navigation.styles.scss';

export const Navigation = () => {

    const {currentUser} = useContext(UserContext);

    return (
        <>
            <nav className="navigation__nav">
                <Link to='/' className="logo-container">
                    <Logo/>
                </Link>

                <Searchbar/>

                    {
                        currentUser?
                        <div className="navigation__buttons">
                            <Link to='/my-team' className="navigation__btn">My Team</Link>
                            <div className="navigation__btn" onClick={signOutUser}>Sign Out</div>
                        </div>
                         :
                        <div className="navigation__buttons">
                            <Link to='/auth' className="navigation__btn">Sign In</Link> 
                        </div>
                    }

            </nav>

            <aside className="navigation__aside">Data provided by Marvel. © 2014 Marvel</aside>
            <Outlet></Outlet>
        </>
    )
}