import { Outlet } from "react-router-dom";

import { Searchbar } from "../../components/searchbar/searchbar.component";

import './navigation.styles.scss';

export const Navigation = () => {

    return (
        <>
            <nav className="navigation__nav">
                <div className="logo-container">
                    <h1>A</h1>
                </div>

                <Searchbar/>

                <a href="#">Login</a>

            </nav>

            <aside className="navigation__aside">Data provided by Marvel. © 2014 Marvel</aside>
            <Outlet></Outlet>
        </>
    )
}