import {useEffect, useState} from 'react';

import { IdCard } from "../../components/id-card/id-card.component";

import './home.styles.scss';

export const Home = () => {
    const [persons, setPersons] = useState([]);

    useEffect(() => async () => {
        try{
            const url = 'https://randomuser.me/api/?results=50';
            const res = await fetch(url);
            const data = await res.json();
            setPersons(data.results);

        } catch(err) {
            console.log('There was an error fetching data:::', err)
        }
    }, [])
    
    return (
        <div className='home__container'>
            {
                persons.map( element => {
                    return <IdCard element={element} key={element.login.uuid}/>
                })
            }
        </div>
    )
}