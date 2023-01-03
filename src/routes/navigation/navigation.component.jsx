import { Outlet } from "react-router-dom";

import { Searchbar } from "../../components/searchbar/searchbar.component";

import './navigation.styles.scss';

export const Navigation = () => {

    return (
        <>
            <nav>
                <div className="logo-container">
                    <h1>A</h1>
                </div>

                <Searchbar/>

                <a href="#">Login</a>

            </nav>
            <Outlet></Outlet>
        </>
    )
}