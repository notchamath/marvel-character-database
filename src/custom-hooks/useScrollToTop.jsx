import {useEffect} from 'react';

// scroll to top of the page whenever the user navigate to a new route
export default function useScrollToTop() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
}
