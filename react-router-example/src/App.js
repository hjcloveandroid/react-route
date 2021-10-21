import './App.css';
import { Route, Link, Switch, Redirect } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
// import Messages from './components/Messages';
import Messages from './components/MessagesNested';
import Error from './components/Error'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Welcome to React-Router</h1>
      </header>
      <div className="App-menu">
        <ul>
          <li> <Link to="/">Home</Link> </li>
          <li> <Link to="/messages">Messages</Link> </li>
          <li> <Link to="/about">About</Link> </li>
          <li> <Link to="/error">ERR</Link> </li>
          <li> <a href="/messages">Messages (with a regular anchor/a element)</a> </li>
        </ul>
      </div>
      <div className="App-intro">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/messages" component={Messages}/>
          <Route path="/about" component={About}/>
          <Route component={Home} />
        </Switch>
       </div>
    </div>
  );
}

export default App;
