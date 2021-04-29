import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import './App.css';
import { Home, Navbar, Generation } from './components'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="bodyContainer">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/generation/:id">
              <Generation/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
