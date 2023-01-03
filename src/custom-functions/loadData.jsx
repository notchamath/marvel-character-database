export const loadData = async (query) => {
    const offset = 0;
    const requestLimit = 100;
    let url = null;

    if(query === '') {
        url = `https://gateway.marvel.com/v1/public/characters?limit=${requestLimit}&offset=${offset}&ts=${process.env.REACT_APP_TS}&apikey=${process.env.REACT_APP_PUBLIC_KEY}&hash=${process.env.REACT_APP_HASH}`;
    } else {
        url = `https://gateway.marvel.com/v1/public/characters?limit=${requestLimit}&nameStartsWith=${query}&ts=${process.env.REACT_APP_TS}&apikey=${process.env.REACT_APP_PUBLIC_KEY}&hash=${process.env.REACT_APP_HASH}`;
    }

    try{
        const res = await fetch(url);
        const response = await res.json();
        const data = response.data.results;
        
        return data;
        
    } catch(err) {
        console.log('There was an error fetching data:::', err);
    }
}