import React from 'react';
import Header from './components/Header/Header';
import Area from './components/Header/Area';
import Difference from './components/Difference/Difference';
import Reviews from './components/Reviews/Reviews';
import Footer from './components/Footer/Footer';
import Findjob from './components/FindJob/Findjob';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import Login from './components/Registration/Login';
import LoginPage from "./pages/login-page/login-page";



const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Route path ="/login" component = {Login} /> 
        <Route path ="/home">
            <Area />
            <Difference />
            <Reviews />
            <Footer />
        </Route>

        <Route path ="/findjob" component = {Findjob} />
          <LoginPage/>

      </div>
    </BrowserRouter>)
}

export default App;
