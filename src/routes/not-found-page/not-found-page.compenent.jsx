import useScrollToTop from '../../custom-hooks/useScrollToTop';

import './not-found-page.styles.scss';

// Error 404 page component
const NotFoundPage = () => {
    useScrollToTop();
    
    return(
        <div className="not-found-page__container">
            <h1>Error 404: Page Not Found</h1>
        </div>
    )
}

export default NotFoundPage;