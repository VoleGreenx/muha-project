import React from 'react';
import Header from './components/Header/Header';
import FAQ from './components/FAQ/FAQ';
import Findjob from './components/FindJob/Findjob';
import { BrowserRouter, Route } from 'react-router-dom';
import LoginPage from "./pages/login-page/login-page";
import Footer from './components/Footer/Footer';
import './App.css';
import HomePage from './pages/home-page/home-page';



const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Route exact path ="/" component = {HomePage} />
        <Route path ="/login" component = {LoginPage} /> 
        <Route path ="/findjob" component = {Findjob} />
        <Footer />
      </div>
    </BrowserRouter>)
}

export default App;
