import React from 'react';
import './App.css';
import Main from './containers/Main';
import data from './product-data.js';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Main data={data} />
      </div>
    </Provider>
  );
}

export default App;
