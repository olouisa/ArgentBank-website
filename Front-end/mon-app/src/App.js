import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Connection from './Pages/Connection';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import './App.css';
import Footer from './components/Footer';
import Header from './containers/Header';
import Edit from './Pages/Edit';
import React from 'react';


function App() {


  return (
    <div className="App">
      
      <Router>
      <Header/>

      <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/connection" element={<Connection stylePaddings={{paddingBottom : "150px", paddingTop:"100px"}}/>} />
              <Route path="/profile" element={<Profile stylePaddings={{paddingBottom : "55px", paddingTop:"15px"}}/>} />
             <Route path='/edit' element={<Edit stylePaddings={{paddingBottom : "55px", paddingTop:"15px"}} />}/>

            </Routes>
      </Router>
      <Footer/>
      
    </div>
  );
}

export default App;
