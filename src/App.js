import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Characters from './pages/Characters'
//import Navbar from 'react-bootstrap/Navbar';

function App() {
  return (

    <BrowserRouter>
      <Header />
      <Route  exact path="/" component={Home} />
      <Route  exact path="/characters" component={Characters} />
      {/* <Route  exact path="/faq" component={Faq} /> */}
    </BrowserRouter>
      
    
    
    
  );
}

export default App;
