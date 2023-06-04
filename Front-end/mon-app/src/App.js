import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Connection from './Pages/Connection';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import './App.css';
import Footer from './components/Footer';
import Header from './containers/Header';
import React from 'react';
import { useSelector } from 'react-redux';



function App() {
let userId = useSelector((state)=> state.id)

  return (
    <div className="App">
      
      <Router>
      <Header id={userId} />
      <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/profile/:id" element={<Profile stylePaddings={{paddingBottom : "55px", paddingTop:"15px"}}/>} />
              <Route path="/connection" element={<Connection stylePaddings={{paddingBottom : "150px", paddingTop:"100px"}}/>} />
              {/* <Route path="*" element={<Home/>} /> */}

            </Routes>
      </Router>
      <Footer/>
      
    </div>
  );
}

export default App;
