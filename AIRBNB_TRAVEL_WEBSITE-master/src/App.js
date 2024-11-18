import React from 'react';
import "./output.css";
import Home from './components/Home';
import Header from './components/Header';
import ProfilePage from './components/ProfilePage'; // Import ProfilePage
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchPage from './components/SearchPage';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='m-0'>
      <Router>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/AIRBNB_TRAVEL_WEBSITE" element={<Home/>}/> 
          <Route exact path="/search" element={<SearchPage/>}/>
          <Route exact path="/profile" element={<ProfilePage/>}/> {/* Add Profile route */}
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;