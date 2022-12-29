import { Outlet } from "react-router-dom";

import './navigation.styles.scss';

export const Navigation = () => {
    return (
        <>
            <nav>
                <div className="logo-container">
                    <h1>A</h1>
                </div>

                <div className="search">
                    <input type="text" />
                    <button type="submit">Search</button>
                </div>

                <a href="#">Login</a>

            </nav>
            <Outlet></Outlet>
        </>
    )
}