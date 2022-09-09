<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/home-page/home-page";
import FindjobePage from "./pages/findjob-page/findjobe-page";
=======
import React from 'react';
import Header from './components/Header/Header';
import SearchJob from './components/search-job/search-job';
import { BrowserRouter, Route } from 'react-router-dom';
>>>>>>> main
import LoginPage from "./pages/login-page/login-page";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import './App.css';



function App() {
  return (
<<<<<<< HEAD
    <div className="App-wrapper">
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={ <HomePage /> } />
                <Route path="/findjobe" element={ <FindjobePage /> } />
                <Route path="/login" element={ <LoginPage />}/>
            </Routes>
            <Footer />
        </Router>
    </div>
  );
=======
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Route exact path ="/" component = {HomePage} />
        <Route path ="/login" component = {LoginPage} /> 
        <Route path ="/search-job" component = {SearchJob} />
        <Footer />
      </div>
    </BrowserRouter>)
>>>>>>> main
}

export default App;
