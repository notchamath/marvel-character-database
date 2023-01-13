import {useContext} from 'react';

import { UserContext } from '../../contexts/user.context';
import { IdCard } from "../../components/id-card/id-card.component";
import useScrollToTop from '../../custom-hooks/useScrollToTop';

import './my-team.styles.scss';

// display the user's team here
export default function MyTeam() {

  const {team} = useContext(UserContext);
  useScrollToTop();
  
  return (
    <div className="my-team__container">
      {
        // no items found message
        team && team.length === 0 && <h2 className='home__no-items-found'>Hit the Like button to add members to your team</h2>
      }
      {
        // id-card for each character
        team && team.length > 0 && team.map(member => <IdCard element={member} key={member.id}/>)
      }
    </div>
  )
}