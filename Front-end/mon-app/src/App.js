import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Connection from './Pages/Connection';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import './App.css';
import Footer from './components/Footer';
import Header from './containers/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
      <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/profile" element={<Profile/>} />
              <Route path="/connection" element={<Connection/>} />
            </Routes>
      </Router>
      <Footer/>
      
    </div>
  );
}

export default App;
