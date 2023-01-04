import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';

const useLoadProfile = (id) => {

    const [profileInfo, setProfileInfo] = useState([]);

    const navigate = useNavigate();
    const pageNotFound = () => navigate(`/not/found`);

    useEffect(() => {
        
        const fetchController = new AbortController();
        const {signal} = fetchController;
        
        const loadProfile = async (id) => {
            let url = `https://gateway.marvel.com/v1/public/characters/${id}?&ts=${process.env.REACT_APP_TS}&apikey=${process.env.REACT_APP_PUBLIC_KEY}&hash=${process.env.REACT_APP_HASH}`;
            
            try{
                const res = await fetch(url, {signal});
                const response = await res.json();

               if(response.code === 404) pageNotFound();

                const data = response.data;

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

    return profileInfo;
}

export default useLoadProfile;