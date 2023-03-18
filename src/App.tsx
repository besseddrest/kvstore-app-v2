import React from 'react';
import { Routes, Route, Link } from "react-router-dom"; 
import Queue from './components/queue/Queue';
import RequestForm from './components/request-form/RequestForm';
import './App.css';
import './styles/app.scss';
import { compileFunction } from 'vm';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1><Link to="/">KVStore App 2.0</Link></h1>
        <ul className="header__menu">
          <li><Link to="/queue">Queue</Link></li>
          <li><Link to="/request">Request</Link></li>
        </ul>
      </header>
      <main className="content">
        <Routes>
          <Route path="/">
            <Route path="/queue" element={<Queue />}></Route>
            <Route path="/request" element={<RequestForm />}></Route>
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
