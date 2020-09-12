import React from 'react';
import './App.css';
import { withRouter } from 'react-router-dom';
import {Switch, Router} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component'

function App() {
  return (
    <div >
      <HomePage />
    </div>
  );
}

export default App;
