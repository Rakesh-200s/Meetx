import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LandingPage from './pages/LandingPage';
import Authentication from './pages/Authentication';
import { AuthProvider } from './contexts/AuthContext';
import VideoMeeting from './pages/VideoMeeting';
import Home from './pages/Home';
import History from './pages/history';
function App() {
  return ( 
    <>
    <Router>
      <AuthProvider>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/auth' element={<Authentication/>}/>
        <Route path=':url' element={<VideoMeeting/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/history' element={<History/>}/>
      </Routes>
      </AuthProvider>
    </Router>
    </>
   );
}

export default App;