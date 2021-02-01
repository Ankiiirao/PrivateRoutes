import {Router,Switch,Route} from 'react-router-dom'
import Home from './components/Home'
import Profile from './components/profile'
import Dashboard from './components/Dashboard'
function App() {
  return (
    <Router>
      <Switch>
          <Route path="/Dashboard" component={Dashboard}/>
          <Route path="/Profile" component={Profile}/>
          <Route path="/Home" component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;
