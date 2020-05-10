import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Switch} from 'react-router-dom';
import Home from './components/Pages/Home';
import Speakers from './components/Pages/Speakers';
import NavBar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';

function App() {
  return (
    <>
    <NavBar/>
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/speakers' component={Speakers}/>
  </Switch>
    <Footer/>
  </>
  );
}


export default App;
