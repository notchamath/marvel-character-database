import { BsSearch } from 'react-icons/bs';

import './searchbar.styles.scss';

export const Searchbar = () => {
   return(
    <div className="search">
        <input type="text" placeholder='Search'/>
        <button type="submit"><BsSearch/></button>
    </div>
   )
}