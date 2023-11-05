import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import Routes from './pages/ routes.js';
import { Provider } from 'react-redux';
import store from './redux/store';
function App() {
  return (
    <Provider store={store}>
      <CssBaseline>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </CssBaseline>
    </Provider>
  );
}
/*import logo from './logo.svg';
import './App.css';
import { Clock } from './Clock';

function App() {
  return (
    <div className="App">
      <Clock />
    </div>
  );
}

export default App;*/
export default App;
