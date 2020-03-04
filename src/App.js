import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Characters from './pages/Characters'
import Episodes from './pages/Episodes'
import Locations from './pages/Locations'
//import Navbar from 'react-bootstrap/Navbar';
import Footer from './Footer';


function App() {
  return (

    <BrowserRouter>
      <Header />
      <Route  exact path="/" component={Home} />
      <Route  exact path="/characters" component={Characters} />
      <Route path='/characters/:page' component={Characters}/>
      <Route  exact path="/episodes" component={Episodes} />
      <Route  exact path="/locations" component={Locations} />
      <Footer />
    </BrowserRouter>
      
    
    
    
  );
}

export default App;
