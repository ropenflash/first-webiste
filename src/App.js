import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import MainContent from './components/MainContent'
import About from './components/MainContent/About'
import Calisthenics from './components/MainContent/Calisthenics'
import ContactUs from './components/MainContent/ContactUs'
import Home from './components/MainContent/Home'
import PrivacyPolicy from './components/MainContent/PrivacyPolicy'
import RopeJumping from './components/MainContent/RopeJumping'
import TermsAndConditions from './components/MainContent/TermsAndConditions'
import Footer from './components/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/home" component={MainContent} />
          <Route path="/calisthenics" component={Calisthenics} />
          <Route path="/rope-jumping" component={RopeJumping} />
          <Route path="/contact" component={ContactUs} />
          <Route path="/about" component={About} />
          <Route path="/qa" component={About} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/terms-conditions" component={TermsAndConditions} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
