import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import App from './App';
import Admin from './pages/admin/Admin';
import ProtectedRoutes from './ProtectedRoutes'
import Login from './pages/auth/Login';
import {Provider} from 'react-redux';
import store from './redux/store';
import {Navigate} from 'react-router-dom'
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route element={<ProtectedRoutes/>}>
          <Route path="/admin" element={<Admin/>}/>
        </Route>
        <Route path="/login" element={<Login/>}/>
        <Route path="*" element={<Navigate to="/login" />}/>
      </Routes>
    </Router>
  </Provider>,
  document.getElementById('root')
);
