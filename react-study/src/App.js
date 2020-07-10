import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CompA from './components/CompA';
import CompB from './components/CompB';
import Error from './components/Error';
import Nav from './components/Nav';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
          <Switch>
            <Route exact path="/" component={CompA} />
            <Route path="/compa" component={CompA} />
            <Route path="/compb" component={CompB} />
            <Route  component={Error} />
          </Switch>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Router>
  );
}

export default App;
