import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import Documentation from './Documentation';
import Fib from './Fib';

function App() {
  return (
    <Router>
      <div >
        <header >
          <ul>
          <li><Link to="/">Strona glowna</Link></li>
          <li> <Link to="/fibonacci">Fibonacci</Link></li>
          <li><Link to="/documentation">Dokumentacja</Link></li>
          </ul>
        </header>
        <br/>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/fibonacci" component={Fib} />
          <Route path="/documentation" component={Documentation} />
        </div>
      </div>
    </Router>
  );
}

export default App;
