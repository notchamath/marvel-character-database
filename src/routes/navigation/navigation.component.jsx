import { Outlet, Link } from "react-router-dom";

import { Searchbar } from "../../components/searchbar/searchbar.component";
import Logo from "../../components/logo/logo.component"; 

import './navigation.styles.scss';

export const Navigation = () => {

    return (
        <>
            <nav className="navigation__nav">
                <Link to='/' className="logo-container">
                    <Logo/>
                </Link>

                <Searchbar/>

                <Link to='/auth' className="sign-up-btn">Sign Up</Link>

            </nav>

            <aside className="navigation__aside">Data provided by Marvel. © 2014 Marvel</aside>
            <Outlet></Outlet>
        </>
    )
}