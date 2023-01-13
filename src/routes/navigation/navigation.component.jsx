import { useContext } from "react";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";

import { signOutUser } from "../../utils/firebase/firebase.utils";
import { UserContext } from '../../contexts/user.context';
import { Searchbar } from "../../components/searchbar/searchbar.component";
import Footer from "../../components/footer/footer.component";

import Logo from "../../components/logo/logo.component"; 

import './navigation.styles.scss';

// navbar component
export const Navigation = () => {

    const {currentUser} = useContext(UserContext);
    const location = useLocation();
    const navigate = useNavigate();

    // clicking Logo button takes user to homepage, if already on homepage, reload the page
    const handleLogoClick = () => {
        if(location.pathname === '/'){
            window.location.reload();
        } else {
            navigate('/');
        }
        window.scrollTo(0, 0);
    }

    return (
        <div className="app-container">
            <nav className="navigation__nav">
                <div className="logo-container" onClick={handleLogoClick}>
                    <Logo/>
                </div>

                <Searchbar/>

                    {
                        currentUser?
                        <div className="navigation__buttons">
                            <Link to='/my-team' className="navigation__btn my-team">My Team</Link>
                            <div className="navigation__btn" onClick={signOutUser}>Sign Out</div>
                        </div>
                         :
                        <div className="navigation__buttons">
                            <Link to='/auth' className="navigation__btn">Sign In</Link> 
                        </div>
                    }

            </nav>

            {location.pathname !== '/auth' && <aside className="navigation__aside">Data provided by Marvel. © 2014 Marvel</aside>
            }

            <Outlet></Outlet>

            <Footer/>
        </div>
    )
}