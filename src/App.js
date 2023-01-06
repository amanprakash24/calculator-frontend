
import './App.css';
import Calculator from "./Calculator"
import {gethistory} from "./Apis/getresult"
import { useState } from 'react';
import axios from 'axios';
function App() {

  return (
    <div className="App">
      <div className="header">
        <h1>Calculator</h1>
      </div>
      
        <Calculator/>
        
    </div>
  );
}

export default App;
