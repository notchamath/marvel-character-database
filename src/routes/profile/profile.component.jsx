import {useEffect, useState, useContext} from 'react';
import {useParams, useNavigate} from "react-router-dom";

import ProfileCard from '../../components/profile-card/profile-card.component';
import {Spinner} from '../../components/spinner/spinner.component';
import {SearchResultsContext} from '../../contexts/search-results.context';
import useScrollToTop from '../../custom-hooks/useScrollToTop';


const Profile = () => {

    useScrollToTop();

    const { id } = useParams();
   
    const {isLoading, setIsLoading} = useContext(SearchResultsContext);
    const [profileInfo, setProfileInfo] = useState(null);

    const navigate = useNavigate();
    const pageNotFound = () => navigate(`/not/found`);

    useEffect(() => {

        setIsLoading(true);
        const fetchController = new AbortController();
        const {signal} = fetchController;
        
        const loadProfile = async (id) => {

            let url = `https://gateway.marvel.com/v1/public/characters/${id}?&ts=${process.env.REACT_APP_TS}&apikey=${process.env.REACT_APP_PUBLIC_KEY}&hash=${process.env.REACT_APP_HASH}`;
            
            try{
                const res = await fetch(url, {signal});
                const response = await res.json();

                if(response.code === 404) pageNotFound();

                const data = response.data;
                setIsLoading(false);
                
                return data.results;
            
            } catch(err) {
                console.log('There was an error fetching data:::', err.message);
            }
        }
    
        loadProfile(id).then(data => {
            if(data !== null && data !== undefined && data !== []) {
                setProfileInfo(data[0]);
            }
        });
        
        return () => {fetchController.abort()}
        
    }, []);
    
    return (
        <>
            {isLoading && <Spinner/>}
            {profileInfo && <ProfileCard profileInfo={profileInfo}/>}
            
        </>
    )
}

export default Profile;