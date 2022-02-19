import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthRoute from './AuthRoute';
import Events from './Event';
import Home from './Home';
import Login from './Login';
import Redirection from './Redirection';

const App = props => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<AuthRoute/>}>
              <Route exact path='/' element={<Home/>}/>
          </Route>
          <Route exact path='/event' element={<AuthRoute/>}>
              <Route exact path='/event/:owner/:repo' element={<Events/>}/>
          </Route>
          <Route exact path="/redirection" element={<Redirection/>} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
