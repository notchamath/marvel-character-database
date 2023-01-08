import {Routes, Route} from 'react-router-dom';

import { Navigation } from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Auth from './routes/auth/auth.component';
import Profile  from './routes/profile/profile.component';
import MyTeam from './routes/my-team/my-team.component';
import NotFoundPage from './routes/not-found-page/not-found-page.compenent';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>} /> 
        <Route path='auth' element={<Auth/>} />
        <Route path='my-team' element={<MyTeam/>} />
        <Route path=':id' element={<Profile/>} />
        
        <Route path='*' element={<NotFoundPage/>}/>
      </Route>
      
    </Routes>
  );
}

export default App;
