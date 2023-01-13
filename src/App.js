import { useContext } from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';

import { UserContext } from './contexts/user.context';

import { Navigation } from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Auth from './routes/auth/auth.component';
import Profile  from './routes/profile/profile.component';
import MyTeam from './routes/my-team/my-team.component';
import NotFoundPage from './routes/not-found-page/not-found-page.compenent';

function App() {
  const {currentUser} = useContext(UserContext);

  return (
    <Routes>
      
      {/* home route */}
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>} />

        {/* protected routes */}
        <Route path='auth' element={!currentUser? <Auth/> : <Navigate to='/my-team' />} />
        <Route path='my-team' element={currentUser? <MyTeam/> : <Navigate to='/auth' /> } />

        {/* profile page route */}
        <Route path=':id' element={<Profile/>} />
        
        {/* catchall error404 */}
        <Route path='*' element={<NotFoundPage/>}/>
      </Route>
      
    </Routes>
  );
}

export default App;
