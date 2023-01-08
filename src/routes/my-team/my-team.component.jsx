import {useContext} from 'react';

import { UserContext } from '../../contexts/user.context';
import { IdCard } from "../../components/id-card/id-card.component";

import './my-team.styles.scss';

export default function MyTeam() {

  const {team} = useContext(UserContext);

  return (
    <div className="my-team__container">
      {
        team && team.length === 0 && <h2 className='home__no-items-found'>Add members to your team and they will show up here</h2>
      }
      {
        team && team.length > 0 && team.map(member => <IdCard element={member} key={member.id}/>)
      }
    </div>
  )
}