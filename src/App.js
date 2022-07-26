import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RocketList from './components/RocketList';
import Missions from './components/Missions';
import Profile from './components/Profile';
import NavBar from './components/shared/NavBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<RocketList />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
