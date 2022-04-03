import React from 'react';
import './App.css';
import Palette from './components/Palette/Palette';
import {padsArray} from './components/Palette/Palette.config'

function App() {
  return (
    <div className="App">
      <Palette pads={padsArray}/>
    </div>
  );
}

export default App;
