import {BrowserRouter as Router,Switch,Route, Redirect} from 'react-router-dom'
import Home from './components/Home'
import Profile from './components/profile'
import Dashboard from './components/Dashboard'


function App() {
  return (
    <Router>
      <Switch>
        <div>
          <h1>Hello</h1>
          <div>
            {window.location.pathname=='/'&& <Redirect to='/Dashboard'/>}
          <Route path="/Dashboard" component={Dashboard}/>
          <Route path="/Profile" component={Profile}/>
          <Route path="/Home" component={Home}/>
          </div>
          <h1>welcome</h1>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
