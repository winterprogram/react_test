import React from 'react';
import logo from './logo.svg';
import './App.css';
import Ball from './Ball'
import Parent from './Parent'
function App() {
  return (
    <div className="App">
      {/* <Ball/> */}
      <Parent/>
      <Parent title='Max daily' maxball={4} maxNum={10}/>
    </div>
  );
}

export default App;
