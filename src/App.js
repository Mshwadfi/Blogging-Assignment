// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Login from './components/Login';
import Blogs from './components/Blogs';
import Home from './components/Home';
import Register from './components/Register';
import Main from './components/Main';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<Home />} /> 
            <Route path="login" element={<Login />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path='register' element={Register} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
