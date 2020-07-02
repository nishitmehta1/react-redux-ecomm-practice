import React from 'react';
import './App.css';
import Main from './containers/Main';
import data from './product-data.js';

function App() {
  return (
    <div className='App'>
      <Main data={data} />
    </div>
  );
}

export default App;
