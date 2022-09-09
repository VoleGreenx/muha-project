import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home-page/home-page";
import FindjobePage from "./pages/findjob-page/findjobe-page";
import LoginPage from "./pages/login-page/login-page";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import './App.css';

function App() {
  return (
    <div className="App-wrapper">
        <Router>
            <Header />
            <Routes>
                <Route exact path="/" element={ <HomePage /> } />
                <Route path="/findjobe" element={ <FindjobePage /> } />
                <Route path="/login" element={ <LoginPage />}/>
            </Routes>
            <Footer />
        </Router>
    </div>
  );
}

export default App;