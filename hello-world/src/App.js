import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import LandingPage from './Pages/LandingPage';
import Form1 from './Pages/Form1';
import Response from './Pages/Response';

function App() {
  return (
    <div className="App">
      <Form1 title="Form "/>
      <Response> </Response>
    </div>
  );
}

export default App;
